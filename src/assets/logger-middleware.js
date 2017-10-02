const logRequest = (req, res, next) => {
  console.log(`Request made to: ${req.hostname}/`);
  console.log(`${req.method} request to ${req.path}`);
  next();
}

module.exports = logRequest;
