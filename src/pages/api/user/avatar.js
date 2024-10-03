import jwt from 'jsonwebtoken';

import cookie from 'cookie';
import { storage } from '../../../utils/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import formidable from 'formidable';
import dbConnect from '../../../db/connect';
import User from '../../../db/models/User';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req, res) => {
  await dbConnect();

  if (req.method === 'POST') {
    //Получение токена из cookie
    const cookies = cookie.parse(req.headers.cookie || '');
    const token = cookies.token;

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const form = formidable({
      keepExtensions: true,
    });

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error('Form parse error:', err);
        return res.status(500).json({ message: 'Error processing file' });
      }

      const userId = fields.userId;
      const file = files.avatar;

      // если файла нет
      if (!file || file.length === 0) {
        return res.status(400).json({ message: 'No file uploaded or file is invalid' });
      }

      // Проверяем, что размер файла не превышает 3 МБ
      const maxSize = 3 * 1024 * 1024; // 3 МБ
      if (file[0].size > maxSize) {
        return res.status(400).json({
          message: 'File size exceeds the limit of 3MB',
        });
      }

      // Проверяем, что файл является изображением
      const allowedMimetypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/bmp'];
      const mimeType = file[0].mimetype;
      if (!allowedMimetypes.includes(mimeType)) {
        return res
          .status(400)
          .json({ message: 'Invalid file type. Allowed types are: jpg, jpeg, png, webp, gif, bmp' });
      }

      const newFilename = `${userId}${path.extname(file[0].originalFilename)}`;
      const storageRef = ref(storage, `avatars/${newFilename}`);

      try {
        const fileBuffer = fs.readFileSync(file[0].filepath); // Читаем файл из локальной файловой системы
        await uploadBytes(storageRef, fileBuffer); // Загружаем файл в Firebase Storage

        // Получаем ссылку на загруженное изображение
        const downloadURL = await getDownloadURL(storageRef);

        // Обновляем запись пользователя в MongoDB
        await User.findByIdAndUpdate(userId, { avatar: downloadURL });

        return res.status(200).json({ message: 'File uploaded and user avatar updated', avatarPath: downloadURL });
      } catch (error) {
        console.error('Upload error:', error);
        return res.status(500).json({ message: 'Error uploading file to Firebase', error: error.message });
      }
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;
