const logRequest = (req, res, next) => {
  console.log(new Date().toGMTString())
  console.log(`Request made to: ${req.hostname}/`);
  console.log(`${req.method} request to ${req.path}`);
  next();
}

module.exports = logRequest;
