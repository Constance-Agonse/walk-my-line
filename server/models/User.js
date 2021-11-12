const mongoose = require ('mongoose');

const UserSchema = new.mongoose.Schema({
  username: {
    type:String,
    require: true,
    // unique :true, // a mettre later pour éviter d'avoir plusieurs fois le meme utilisateur

  },
  email: {
    type:String,
    require: true,
  },
  password : {
    type: String,
    required,
    // min :8, // si on veut de la secu
  },
  profilePic: {
    type: String,
    default: "http://images6.fanpop.com/image/photos/39000000/Cool-Dog-animals-39056074-1600-900.jpg",
  },
  isFollowing: [{
    type : Schema.Types.ObjectId,
    ref : "user"
  }],

}
// , { timestamps: true }
); 

const userModel = mongoose.model("User", UserSchema);

module.exports = userModel;
