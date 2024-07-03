const Cart = require('../models/Cart');
const Product = require('../models/Product');

const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate('items.product');
    if (!cart) {
      return res.status(404).json({ msg: 'Cart not found' });
    }
    res.json(cart);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }

    let cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      cart = new Cart({ user: req.user.id, items: [{ product: productId, quantity }] });
    } else {
      const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);
      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ product: productId, quantity });
      }
    }
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

const removeFromCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      return res.status(404).json({ msg: 'Cart not found' });
    }
    cart.items = cart.items.filter(item => item._id.toString() !== req.params.id);
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

module.exports = { getCart, addToCart, removeFromCart };
