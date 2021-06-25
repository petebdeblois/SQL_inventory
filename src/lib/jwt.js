const jwt = require('jsonwebtoken');
// DOCS https://www.npmjs.com/package/jsonwebtoken
function sign(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: '1d', // expiresIn: expressed in seconds or a string describing a time span zeit/ms.
      },
      (error, token) => {
        if (error) return reject(error);
        return resolve(token);
      }
    );
  });
}

module.exports = {
  sign,
};
