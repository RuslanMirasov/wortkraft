import dbConnect from '../../../db/connect';
import User from '../../../db/models/User';
import jwt from 'jsonwebtoken';

const handler = async (req, res) => {
  await dbConnect();

  const { cookies } = req;
  const token = cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Only authorised users can save progress' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (req.method === 'PATCH') {
      const { id } = req.body;

      const existingProgress = user.progress.find(progress => progress.id === id);

      if (existingProgress) {
        await User.findOneAndUpdate(
          { _id: decoded.id, 'progress.id': id },
          { $set: { 'progress.$': req.body } },
          { new: true }
        );
      } else {
        await User.findByIdAndUpdate(decoded.id, { $push: { progress: req.body } }, { new: true });
      }

      return res.status(200).json({ message: 'Progress updated', progress: user.progress });
    } else {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error while updating progress: ', error);
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Invalid token' });
    }
    return res.status(500).json({ message: error.message });
  }
};

export default handler;
