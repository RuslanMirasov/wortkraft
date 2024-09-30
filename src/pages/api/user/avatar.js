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

// import fs from 'fs';
// import path from 'path';

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// const handler = async (req, res) => {
//   await dbConnect();

//   if (req.method === 'POST') {
//     const form = formidable({
//       uploadDir: path.join(process.cwd(), 'public/avatars'),
//       keepExtensions: true,
//     });

//     // Создаем директорию, если ее нет
//     if (!fs.existsSync(form.uploadDir)) {
//       fs.mkdirSync(form.uploadDir, { recursive: true });
//     }

//     form.parse(req, async (err, fields, files) => {
//       if (err) {
//         return res.status(500).json({ message: 'Error processing file' });
//       }

//       const userId = fields.userId;
//       const file = files.avatar;

//       // если файла нет
//       if (!file) {
//         return res.status(400).json({ message: 'No file uploaded or file is invalid' });
//       }

//       // Проверяем, что файл является изображением
//       const allowedMimetypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/bmp'];
//       const mimeType = file[0].mimetype;
//       if (!allowedMimetypes.includes(mimeType)) {
//         return res
//           .status(400)
//           .json({ message: 'Invalid file type. Allowed types are: jpg, jpeg, png, webp, gif, bmp' });
//       }

//       // УСТАНОВКА ИМЕНИ ФАЙЛА КАК ID ПОЛЬЗОВАТЕЛЯ
//       const oldPath = file[0].filepath;
//       const newFilename = `${userId}${path.extname(file[0].originalFilename)}`;
//       const newPath = path.join(form.uploadDir, newFilename);

//       // НУЖНО ПРОВЕРИТЬ ЕСТЬ ЛИ ФАЙЛ С ТАКИМ ИМЕНЕМ, ЕСЛИ ЕСТЬ ТО УДАЛИТЬ/ЗАМЕНИТЬ НА НОВЫЙ НЕ ПРОСТО ЗАГРУЗИТЬ ЕЩЁ ОДИН ЭТО ВАЖНО
//       const existingFiles = fs.readdirSync(form.uploadDir);
//       const existingFile = existingFiles.find(fileName => fileName.startsWith(userId));
//       if (existingFile) {
//         const fileToDeletePath = path.join(form.uploadDir, existingFile);
//         try {
//           fs.unlinkSync(fileToDeletePath);
//         } catch (error) {
//           return res.status(500).json({ message: 'Error deleting old file' });
//         }
//       }

//       //СОХРАНЯЕМ АВАТАРКУ
//       try {
//         fs.renameSync(oldPath, newPath);
//       } catch (error) {
//         return res.status(500).json({ message: 'Error saving file' });
//       }

//       //ДЕЛАЕМ ЗАПИСЬ В БАЗУ ПОЛЬЗОВАТЕЛЮ
//       try {
//         const avatarPath = `/avatars/${newFilename}?t=${Date.now()}`;
//         await User.findByIdAndUpdate(userId, { avatar: avatarPath });
//         res.status(200).json({ message: 'File uploaded and user avatar updated', avatarPath });
//       } catch (error) {
//         return res.status(500).json({ message: 'Error updating user avatar' });
//       }
//     });
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// };

// export default handler;
