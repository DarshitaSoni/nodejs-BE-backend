
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let stateSchema = new Schema(
    {
      id: {
        type: Number,
      },
      name: {
        type: String,
        required: true,
      },
      code: {
        type: String,
        require: true,
      },
      country_id: {
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

let stateModal = mongoose.model("state", stateSchema, "state");

module.exports = stateModal;