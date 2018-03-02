const mongoose = require("mongoose");
const taskSchema = require("./Task.js");
const listSchema = require("./List.js");

const boardSchema = new mongoose.Schema({
  name: String,
  createdBy: String,
  createdOn: {
    type: Date,
    default: Date.now
  },
  lists: [listSchema]
});

var Board = mongoose.model("Board", boardSchema);
module.exports = Board;
