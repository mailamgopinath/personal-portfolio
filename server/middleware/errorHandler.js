export const notFound = (req, res) =>
  res.status(404).json({ success: false, message: `Route not found: ${req.originalUrl}` });

// eslint-disable-next-line no-unused-vars
export const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ success: false, message: err.message || 'Server error.' });
};
