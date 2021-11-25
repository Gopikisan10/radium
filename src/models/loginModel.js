const mongoose = require("mongoose");
ObjectId = mongoose.Schema.Types.ObjectId;

const loginSchema = new mongoose.Schema(
  {

    name: ObjectId,
    password: ObjectId
    
  },
  { timestamps: true }
);


module.exports = mongoose.model("login", productSchema);
