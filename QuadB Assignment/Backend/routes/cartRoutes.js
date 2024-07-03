const express = require('express');
const { getCart, addToCart, removeFromCart } = require('../controllers/cartController');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, getCart);
router.post('/', authMiddleware, addToCart);
router.delete('/:id', authMiddleware, removeFromCart);

module.exports = router;
