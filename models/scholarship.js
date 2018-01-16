const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const scholarshipSchema = new Schema({
  org: { type: String, required: true },
  name: { type: String, required: true },
  url: { type: String, required: true }
});
const Scholarship = mongoose.model("Scholarship", scholarshipSchema);
module.exports = Scholarship;
