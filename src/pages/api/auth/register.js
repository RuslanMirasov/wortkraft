import dbConnect from '../../../db/connect';
import User from '../../../db/models/User';
import { generateToken } from '../../../utils/jwt';

const handler = async (req, res) => {
  await dbConnect();

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password, language, name } = req.body;

  if (!email || !password || !language) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const user = new User({
      email,
      password,
      language,
      name: name || 'New User',
    });

    await user.save();

    // Генерация JWT токена
    generateToken(user, res);

    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default handler;
