const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let date = new Date();

const projectSchema = new Schema({
  title: { type: String},
  text: { type: String},
  imgsrc: { type: String},
  link: { type: Array},

},{
  timestamps: true
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
