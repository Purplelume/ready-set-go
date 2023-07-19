const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;;
const expiration = '3h';

module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const decodedToken = jwt.verify(token, secret);
      // userName and user data from the token
      req.user = decodedToken.data; 
    } catch (err) {
      console.error('Error verifying token:', err.message);
    }

    return req;
  },
  signToken: function (user) {
    const { userName, email, _id } = user;
    const payload = { userName, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};