import dbConnect from '../../../db/connect';
import User from '../../../db/models/User';
import Word from '../../../db/models/Word';
import jwt from 'jsonwebtoken';

const handler = async (req, res) => {
  await dbConnect();

  const { cookies } = req;
  const token = cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Only authorized users can access their bookmarks' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (req.method === 'PATCH') {
      const { wordId } = req.body;

      // Проверяем, существует ли слово
      const word = await Word.findById(wordId);
      if (!word) {
        return res.status(404).json({ message: 'Word not found' });
      }

      // Добавляем или удаляем слово из закладок с помощью findByIdAndUpdate
      const isBookmarked = user.bookmarks.includes(wordId);
      const updateOperation = isBookmarked
        ? { $pull: { bookmarks: wordId } } // Удалить из закладок
        : { $addToSet: { bookmarks: wordId } }; // Добавить в закладки

      await User.findByIdAndUpdate(user._id, updateOperation, { new: true });

      return res.status(200).json({
        message: isBookmarked ? 'Word was deleted from bookmarks' : 'Word added to bookmarks',
      });
    } else if (req.method === 'GET') {
      // Возвращаем список слов из закладок
      const words = await Word.find({
        _id: { $in: user.bookmarks },
      });

      const response = words.map(({ _id, name, book, theme }) => ({ _id, name, book, theme }));

      return res.status(200).json(response);
    } else {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export default handler;
