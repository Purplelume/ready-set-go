const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';
const expiration = '2h';

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
      req.user = decodedToken.data; // The user data from the token, including userName
    } catch (error) {
      // Optionally, log the error for troubleshooting purposes
      console.error('Error verifying token:', error.message);
    }

    return req;
  },
  signToken: function (user) {
    const { userName, email, _id } = user;
    const payload = { userName, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};