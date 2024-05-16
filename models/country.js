
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let countrySchema = new Schema(
    {
      id: {
        type: Number,
      },
      name: {
        type: String,
        required: true,
      },
      country_code: {
        type: String,
      },
      phone_code: {
        type: String,
      },
      created_at: {
        type: Date,
      },
      updated_at: {
        type: Date,
      },
      slug: {
        type: String,
      },
    },
    { timestamps: true }
);

let countryModal = mongoose.model("country", countrySchema, "country");

module.exports = countryModal;