const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  model: { type: String, enum: ['mark1', 'mark2'], required: true },
  positions: { type: Number, enum: [1, 2, 3], required: true },
  color: { type: String, enum: ['white', 'black', 'gray'], required: true },
  price: { type: Number, required: true },
  features: [String],
  imageUrl: { type: String, required: true },
  inStock: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', ProductSchema);