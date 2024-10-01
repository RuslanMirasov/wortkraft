import dbConnect from '../../../db/connect';
import User from '../../../db/models/User';

const handler = async (req, res) => {
  await dbConnect();

  if (req.method === 'PATCH') {
    const { id, password, password2 } = req.body;

    try {
      // Находим пользователя по ID
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Сравнение текущего пароля с хешированным паролем в базе
      const isMatch = await user.comparePassword(password); // Используем метод comparePassword
      if (!isMatch) {
        return res.status(400).json({ message: 'Current password is incorrect' });
      }

      // Обновление пароля пользователя
      user.password = password2; // Устанавливаем новый пароль
      await user.save(); // Сохраняем изменения

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
