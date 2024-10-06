import dbConnect from '../../../db/connect';
import User from '../../../db/models/User';
import Word from '../../../db/models/Word';
import jwt from 'jsonwebtoken';

const handler = async (req, res) => {
  await dbConnect();

  // Извлечение и проверка токена из cookies
  const { cookies } = req;
  const token = cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Only authorised users can access their bookmarks' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (req.method === 'PATCH') {
      const { wordId } = req.body;

      const bookmarkIndex = user.bookmarks.indexOf(wordId);

      if (bookmarkIndex > -1) {
        user.bookmarks.splice(bookmarkIndex, 1);
        await user.save();
        return res.status(200).json({ message: 'Word was deleted from bookmarks' });
      } else {
        user.bookmarks.push(wordId);
        await user.save();
        return res.status(201).json({ message: 'Word added to bookmarks' });
      }
    } else if (req.method === 'GET') {
      // Получение слов по id из bookmarks
      const words = await Word.find({
        _id: { $in: user.bookmarks }, // Используем $in для поиска всех слов, ID которых есть в массиве bookmarks
      });

      const response = words.map(({ _id, name }) => ({ _id, name }));

      return res.status(200).json(response);
    } else {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.log('error: ', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

export default handler;
