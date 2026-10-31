import mongoose from 'mongoose';
import Contact from '../models/Contact.js';

export const createContact = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ success: false, message: 'Database unavailable. Please try again later.' });
    }
    const { name, email, subject, message } = req.body;
    await Contact.create({ name, email, subject, message });
    res.status(201).json({ success: true, message: 'Thanks! Your message has been sent.' });
  } catch (err) {
    next(err);
  }
};
