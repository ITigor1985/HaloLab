const Joi = require('joi');

const contactShema = Joi.object({
  name: Joi.string().required(),
  phone: Joi.string()
    .length(12)
    .pattern(/^[0-9]+$/),
});

module.exports = { contactShema };
