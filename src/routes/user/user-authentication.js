const jwt = require('../../assets/jwt');

const authenticateUser = (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers['Authorization'];
  console.log(token);
  if (token) {
    try {let decoded = jwt.verifyKey(token);}
    catch (e) {return res.status(204).send('Invalid token');}
    req.token = token;
    next();
  } else {
    return res.status(403).send('No token provided');
  }
}
