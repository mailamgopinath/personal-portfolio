import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { createContact } from '../controllers/contactController.js';
import { validateContact } from '../middleware/validateContact.js';

const router = Router();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many requests. Please try again later.' },
});

router.post('/', limiter, validateContact, createContact);

export default router;
