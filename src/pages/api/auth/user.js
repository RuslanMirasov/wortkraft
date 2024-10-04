import dbConnect from '../../../db/connect';
import User from '../../../db/models/User';
import jwt from 'jsonwebtoken';

const handler = async (req, res) => {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const { token } = req.cookies;

      if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id).select('-password');

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ message: 'Server error' });
    }
  }
};

export default handler;
