import dbConnect from '../../../db/connect';
import Book from '../../../db/models/Book';

const handler = async (req, res) => {
  await dbConnect();

  if (req.method === 'GET') {
    const { search } = req.query;
    try {
      let books;
      if (search) {
        const searchRegex = new RegExp(search, 'i'); // 'i' делает поиск регистронезависимым
        books = await Book.find({ name: { $regex: searchRegex } }).sort({ _id: 1 });
      } else {
        books = await Book.find().sort({ _id: 1 });
      }
      res.status(200).json(books);
    } catch (error) {
      console.log('error: ', error);
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;
