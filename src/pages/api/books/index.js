import dbConnect from '../../../db/connect';
import Book from '../../../db/models/Book';

const handler = async (req, res) => {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const books = await Book.find();
      res.status(200).json(books); // Отправляем ответ с данными
    } catch (error) {
      console.log('error: ', error);
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;
