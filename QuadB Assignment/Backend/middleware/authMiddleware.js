const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

const adminMiddleware = async (req, res, next) => {
  const user = await User.findById(req.user.id);
  if (user && user.isAdmin) {
    next();
  } else {
    res.status(403).json({ msg: 'Admin resource, access denied' });
  }
};

module.exports = { authMiddleware, adminMiddleware };
