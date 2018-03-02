const mongoose = require("mongoose");
const taskSchema = require("./Task.js");

const listSchema = new mongoose.Schema({
  name: String,
  tasks: [taskSchema]
});

var List = mongoose.model("List", listSchema);
module.exports = List;
