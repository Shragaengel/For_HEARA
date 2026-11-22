const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  message: String,
  source: { type: String, default: 'one-pager' },
  status: { 
    type: String, 
    enum: ['new', 'contacted', 'converted', 'closed'], 
    default: 'new' 
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Lead', LeadSchema);