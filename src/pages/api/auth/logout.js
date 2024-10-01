import { serialize } from 'cookie';

const handler = (req, res) => {
  if (req.method === 'POST') {
    res.setHeader(
      'Set-Cookie',
      serialize('token', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        expires: new Date(0),
        path: '/',
      })
    );
    res.status(200).json({ message: 'Logged out successfully' });
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
