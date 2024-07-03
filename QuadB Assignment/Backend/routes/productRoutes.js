const express = require('express');
const { getProducts, getProductById, addProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', authMiddleware, adminMiddleware, addProduct);
router.put('/:id', authMiddleware, adminMiddleware, updateProduct);
router.delete('/:id', authMiddleware, adminMiddleware, deleteProduct);

module.exports = router;
