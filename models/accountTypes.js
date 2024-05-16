const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let accountTypesSchema = new Schema(
    {
      info: {
        type: String,
        required: true,
      },
      info_content_taggable_type: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        required: true,
      },
      svg: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      slug: {
        type: String,
        required: true,
      },
      id: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
);

let AccountTypeModal = mongoose.model("account_types", accountTypesSchema);

module.exports = AccountTypeModal;