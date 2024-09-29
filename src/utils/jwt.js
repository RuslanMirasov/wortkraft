import jwt from 'jsonwebtoken';
import cookie from 'cookie';

export const generateToken = (user, res) => {
  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );

  // Установка JWT в HttpOnly cookie
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // В продакшн окружении токен будет передаваться только по https
      maxAge: 60 * 60 * 24 * 7, // 7 дней
      sameSite: 'strict',
      path: '/',
    })
  );

  return token;
};
