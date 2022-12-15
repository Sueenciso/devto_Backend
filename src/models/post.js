const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  tittle: { type: String, required: true, trim: true },
  img:{type:String},
  tags: [{ type: String }],
  content: { type: String, required: true },
  creationDate: { type: Date, required: true },
  user: { type: mongoose.ObjectId, ref: "User" },
});

const model = mongoose.model("Post", schema);

module.exports = {
  schema,
  model,
};
