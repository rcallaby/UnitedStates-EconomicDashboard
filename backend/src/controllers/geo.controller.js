exports.getStateData = async (req, res, next) => {
  try {
    // Example: Census ACS state-level data
    res.json({ success: true, message: 'Geo data endpoint ready' });
  } catch (err) {
    next(err);
  }
};