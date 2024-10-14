import dbConnect from '../../../db/connect';
import User from '../../../db/models/User';
import jwt from 'jsonwebtoken';

const handler = async (req, res) => {
  await dbConnect();

  const { cookies } = req;
  const token = cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Only authorised users can access their bookmarks' });
  }

  if (req.method === 'PATCH') {
    const { ...updates } = req.body;

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findByIdAndUpdate(decoded.id, updates, {
        new: true,
        runValidators: true,
      });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      return res.status(200).json({ message: 'Password updated' });
    } catch (error) {
      console.log('error: ', error);
      return res.status(500).json({ message: 'Server error' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;
