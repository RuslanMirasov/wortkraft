import dbConnect from '../../../db/connect';
import Word from '../../../db/models/Word';

const handler = async (req, res) => {
  await dbConnect();

  if (req.method === 'GET') {
    const { book, theme } = req.query;

    try {
      const words = await Word.find({ book, theme }).sort({ _id: 1 });

      if (words.length === 0) {
        return res.status(200).json([]);
      }

      const response = words.map(({ _id, name, book, theme }) => ({ _id, name, book, theme }));

      res.status(200).json(response);
    } catch (error) {
      console.log('error: ', error);
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;
