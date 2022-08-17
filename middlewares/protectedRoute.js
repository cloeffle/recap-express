const protectedRoute = (req, res, next) => {
  const secret = req.body.secret;

  if (secret === 'octopus') {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

module.exports = { protectedRoute };
