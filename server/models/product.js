const { Schema, model } = require('mongoose');

const productSchema = Schema(
  {
    name: {
      type: String,
      required: [true],
    },
    category: {
      type: String,
      required: [true],
    },
    price: {
      type: Number,
      required: [true],
    },
    // subscription: {
    //   type: String,
    //   enum: ["starter", "pro", "business"],
    //   default: "starter",
    // },
    // token: {
    //   type: String,
    //   default: null,
    // },
    // owner: {
    //   type: Schema.Types.ObjectId,
    //   ref: "user",
    // },
  },
  { versionKey: false, timestamps: true }
);

const Product = model('product', productSchema);

module.exports = {
  Product,
};
