import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

export default (req, res, next) => {
  try {
    const token = req.header('token');
    if (!token) return res.status(401).json({ status: 'error', error: 'Access Denied - No token provided' });

    req.user = jwt.verify(token, secret);
    next();
  } catch (error) {
    return res.status(400).json({ status: 'error', error: 'Invalid token' });
  }
};
