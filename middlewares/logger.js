const logger = (req, res, next) => {
  console.log('i am a middleware');
  next();
};

module.exports = logger;
