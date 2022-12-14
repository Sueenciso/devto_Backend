const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
    tittle:{type: String, require:true, trim:true},
    tags:[{trype:String}],
    content:{type:String, require:true},
    creationDate:{type:Date,require:true},
    user: { type: mongoose.ObjectId, ref: "User" },
});

const model = mongoose.model("Post", schema);

module.exports = {
  schema,
  model,
};