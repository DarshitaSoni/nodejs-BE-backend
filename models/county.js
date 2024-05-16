
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let countySchema = new Schema(
    {
      id: {
        type: Number,
      },
      name: {
        type: String,
        required: true,
      },
      state_id: {
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

let countyModal = mongoose.model("county", countySchema, "county");

module.exports = countyModal;