import dbConnect from '../../../db/connect';
import User from '../../../db/models/User';

const handler = async (req, res) => {
  await dbConnect();

  if (req.method === 'PATCH') {
    const { id, ...updates } = req.body;

    try {
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      user.set(updates);
      await user.save();

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
