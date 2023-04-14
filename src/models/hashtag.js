const mongoose = require("mongoose");

const hashtagSchema = new mongoose.Schema(
  {
    title: {
      type: "string",
      required: true,
    },
    tweets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tweet",
      },
    ],
  },
  { timestamps: true }
);

const Hashtag = mongoose.Model("Hashtag", hashtagSchema);
module.exports = Hashtag;
