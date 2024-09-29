import dbConnect from '../../../db/connect';
import User from '../../../db/models/User';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

// Отключаем автоматическую обработку body
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    await dbConnect(); // Подключение к базе данных

    const form = new formidable.IncomingForm();

    form.uploadDir = path.join(process.cwd(), 'public/avatars');
    form.keepExtensions = true;

    if (!fs.existsSync(form.uploadDir)) {
      fs.mkdirSync(form.uploadDir, { recursive: true });
    }

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error while parsing the file' });
      }

      const userId = fields.userId;
      const oldPath = files.avatar.filepath;
      const newExtension = path.extname(files.avatar.originalFilename);
      const newFilename = `${userId}${newExtension}`;
      const newPath = path.join(form.uploadDir, newFilename);

      // Проверяем, существует ли файл с таким именем
      const fileExists = fs.existsSync(newPath);

      if (fileExists) {
        // Если файл с таким именем существует и расширение файла совпадает, просто заменяем файл
        if (newExtension === path.extname(newFilename)) {
          fs.rename(oldPath, newPath, err => {
            if (err) {
              console.error(err);
              return res.status(500).json({ message: 'Error while replacing the file' });
            }

            return res
              .status(200)
              .json({ message: 'File replaced successfully', avatarUrl: `/avatars/${newFilename}` });
          });
        } else {
          // Если расширение отличается, заменяем файл и обновляем базу данных
          fs.rename(oldPath, newPath, async err => {
            if (err) {
              console.error(err);
              return res.status(500).json({ message: 'Error while saving the file with a new extension' });
            }

            try {
              const avatarUrl = `/avatars/${newFilename}`;
              await User.findByIdAndUpdate(userId, { avatar: avatarUrl }, { new: true });

              return res.status(200).json({ message: 'File uploaded and database updated successfully', avatarUrl });
            } catch (dbError) {
              console.error(dbError);
              return res.status(500).json({ message: 'Database update failed' });
            }
          });
        }
      } else {
        // Если файла нет, просто загружаем его и обновляем запись в базе
        fs.rename(oldPath, newPath, async err => {
          if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error while saving the new file' });
          }

          try {
            const avatarUrl = `/avatars/${newFilename}`;
            await User.findByIdAndUpdate(userId, { avatar: avatarUrl }, { new: true });

            return res.status(200).json({ message: 'File uploaded and database updated successfully', avatarUrl });
          } catch (dbError) {
            console.error(dbError);
            return res.status(500).json({ message: 'Database update failed' });
          }
        });
      }
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
