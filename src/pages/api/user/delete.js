import deletAllAvatarsFromFirebase from '../../../utils/deletAllAvatarsFromFirebase';
import dbConnect from '../../../db/connect';
import User from '../../../db/models/User';

const handler = async (req, res) => {
  await dbConnect();

  if (req.method === 'DELETE') {
    const { id } = req.body;

    try {
      const user = await User.findById(id);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Удаление всех изображений пользователя из Firebase
      await deletAllAvatarsFromFirebase(id);

      // Удаление пользователя из базы данных
      await User.findByIdAndDelete(id);

      // Удаление HTTPOnly куки
      res.setHeader('Set-Cookie', 'token=; HttpOnly; Max-Age=0; Path=/;');

      return res.status(200).json(user);
    } catch (error) {
      console.log('error: ', error);
      return res.status(500).json({ message: 'Server error' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;
