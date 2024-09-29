import dbConnect from '../../../db/connect';
import User from '../../../db/models/User';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import Jimp from 'jimp'; // Подключаем библиотеку Jimp

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === 'POST') {
    const form = formidable({
      uploadDir: path.join(process.cwd(), 'public/avatars'),
      keepExtensions: true,
    });

    // Создаем директорию, если ее нет
    if (!fs.existsSync(form.uploadDir)) {
      fs.mkdirSync(form.uploadDir, { recursive: true });
    }

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(500).json({ message: 'Error processing file' });
      }

      const userId = fields.userId;
      const file = files.avatar;

      // если файла нет
      if (!file) {
        return res.status(400).json({ message: 'No file uploaded or file is invalid' });
      }

      // Проверяем, что файл является изображением
      const allowedMimetypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/bmp'];
      const mimeType = file[0].mimetype;
      if (!allowedMimetypes.includes(mimeType)) {
        return res
          .status(400)
          .json({ message: 'Invalid file type. Allowed types are: jpg, jpeg, png, webp, gif, bmp' });
      }

      // ПРОВЕРЯЕМ ПОКА
      const oldPath = file[0].filepath;
      const newFilename = `${userId}${path.extname(file[0].originalFilename)}`; // Используем file[0]
      const newPath = path.join(form.uploadDir, newFilename);

      // Проверяем, существует ли файл с таким именем
      const existingFiles = fs.readdirSync(form.uploadDir);
      const existingFile = existingFiles.find(fileName => fileName.startsWith(userId));
      if (existingFile) {
        const fileToDeletePath = path.join(form.uploadDir, existingFile);
        try {
          fs.unlinkSync(fileToDeletePath);
        } catch (error) {
          return res.status(500).json({ message: 'Error deleting old file' });
        }
      }

      // ОБРАБАТЫВАЕМ ИЗОБРАЖЕНИЕ С ИСПОЛЬЗОВАНИЕМ JIMP
      // Проверяем, существует ли временный файл перед обработкой
      if (!fs.existsSync(oldPath)) {
        console.error('Temporary file does not exist:', oldPath);
        return res.status(500).json({ message: 'Temporary file does not exist' });
      }

      //Перемещаем новый файл
      try {
        fs.renameSync(oldPath, newPath); // Перемещаем файл
      } catch (error) {
        return res.status(500).json({ message: 'Error saving file' });
      }

      try {
        const avatarPath = `/avatars/${newFilename}?t=${Date.now()}`;
        await User.findByIdAndUpdate(userId, { avatar: avatarPath });
        res.status(200).json({ message: 'File uploaded and user avatar updated', avatarPath });
      } catch (error) {
        return res.status(500).json({ message: 'Error updating user avatar' });
      }
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
