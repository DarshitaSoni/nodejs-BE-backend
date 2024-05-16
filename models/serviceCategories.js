const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let serviceCategoriesSchema = new Schema(
    {
      seq_no: {
        type: Number,
        required: true,
      },
      service_category_group_id: {
        type: Number,
        required: true,
      },
      info_content_taggable_type: {
        type: String,
        required: true,
      },
      service_category_group_name: {
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
      visible_svg: {
        type: Boolean,
        required: true
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

let serviceCategoryModal = mongoose.model("service_categories", serviceCategoriesSchema);

module.exports = serviceCategoryModal;