const mongoose = require('mongoose');

const JourneySchema = new.mongoose.Schema({
  isPublic: {
    type: Boolean,
    default: false,
  },
  tags: [{
    type: Schema.Types.ObjectId,
    ref: "tag"
  }],
  pins: [{
    type: Schema.Types.ObjectId,
    ref: "pin"
  }],


  creator: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },

  journeyTime: {
    type: Number,
    min: 0,
  },

  km: {
    type: Number,
    min: 0,
  },

  isLikedBy: [{
    type: Schema.Types.ObjectId,
    ref: "user"
  }],

  rate: {
    type: Number,
    default: 0,
  },
  
  latIntial: {
    type: Number
  },
  longIntial: {
    type: Number
  } // A GERER PLUS TARD DANS LE CODE LORS DE LA CREATION D'UN TRAJET
}
  // , { timestamps: true }
);

const JourneyModel = mongoose.model("Journey", JourneySchema);

module.exports = JourneyModel;
