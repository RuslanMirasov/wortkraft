import dbConnect from '../../../db/connect';
import Word from '../../../db/models/Word';

const handler = async (req, res) => {
  await dbConnect();

  if (req.method === 'GET') {
    const { id } = req.query;

    try {
      const word = await Word.findById(id);

      if (!word) {
        return res.status(200).json({});
      }

      res.status(200).json(word);
    } catch (error) {
      console.log('error: ', error);
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;
