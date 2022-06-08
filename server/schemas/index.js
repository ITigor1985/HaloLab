const { contactShema } = require('./contact');
const { favoriteJoiSchema } = require('./contact');
const { registerJoiSchema } = require('./product');
const { loginJoiShema } = require('./product');

module.exports = {
  contactShema,
  registerJoiSchema,
  loginJoiShema,
};
