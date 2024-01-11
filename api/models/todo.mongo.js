const { default: mongoose } = require("mongoose");

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  deleted: {
    type: Boolean,
    required: true,
    default: false,
  },
  status: {
    type: Boolean,
    required: true,
    default: false,
  },
  userId: {
    type: Number,
    required: true,
  },
});

const todoModel = mongoose.model("Todo", todoSchema);
module.exports = todoModel;
