const mongoose = require ('mongoose');

const TagSchema = new.mongoose.Schema({
  name: {
    type:String,
    require: true,
  }
}
// , { timestamps: true }
); 

const tagModel = mongoose.model("tag", TagSchema);

module.exports = tagModel;
