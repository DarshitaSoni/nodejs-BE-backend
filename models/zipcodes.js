// fields of zipcodes collection in rails side
// id, zipcode, city_id, county_id, state_id, country_id, slug, created_at, updated_at, code_type

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let zipcodesSchema = new Schema(
    {
      id: {
        type: Number,
        required: true,
      },
      zipcode: {
        type: String,
        required: true,
      },
      city_id: {
        type: Number,
        required: true,
      },
      county_id: {
        type: Number,
        required: true,
      },
      state_id: {
        type: Number,
        required: true,
      },
      created_at: {
        type: Date,
        required: true,
      },
      updated_at: {
        type: Date,
        required: true,
      },
      slug: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
);

let zipcodeModal = mongoose.model("zipcodes", zipcodesSchema);

module.exports = zipcodeModal;