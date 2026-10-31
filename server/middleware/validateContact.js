const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateContact = (req, res, next) => {
  const { name, email, subject, message } = req.body || {};
  const errors = {};

  if (typeof name !== 'string' || name.trim().length < 2) errors.name = 'Name must be at least 2 characters.';
  if (typeof email !== 'string' || !EMAIL_RE.test(email.trim())) errors.email = 'Enter a valid email address.';
  if (typeof subject !== 'string' || subject.trim().length < 3) errors.subject = 'Subject must be at least 3 characters.';
  if (typeof message !== 'string' || message.trim().length < 10) errors.message = 'Message must be at least 10 characters.';

  if (Object.keys(errors).length) {
    return res.status(400).json({ success: false, message: 'Validation failed.', errors });
  }
  next();
};
