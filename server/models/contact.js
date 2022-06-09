const { Schema, model } = require('mongoose');

const contactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },

    phone: {
      type: Number,
    },
  },
  { versionKey: false, timestamps: true }
);

const Contact = model('contact', contactSchema);

module.exports = {
  Contact,
};
