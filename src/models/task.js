const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    index: { unique: true }
  },
  label: String,
  comments: [String], //TODO: add a comment schema?
  updated: {
    type: Date,
    default: Date.now
  },
  members: [String],
  dueDate: Date,
  checklist: [String], //TODO: add a checklist schema?
  attachments: [String]
});

var Task = mongoose.model("Task", taskSchema);
module.exports = Task;
