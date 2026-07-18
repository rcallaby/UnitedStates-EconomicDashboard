module.exports = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  // For public dashboard, you can make this optional or remove
  if (process.env.NODE_ENV === 'production' && !apiKey) {
    return res.status(401).json({ error: 'API key required' });
  }
  next();
};