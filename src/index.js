const express = require("express");
const connect = require("./config/database");
const app = express();

const Tweet = require("./models/tweet");

app.listen(3000, async () => {
  console.log("server started at port 3000");
  await connect();
  console.log("Mongo db connected");
  const tweets = await Tweet.find({
    content: ["Third tweet", "my tweet", "jkjklj"],
  });
  console.log(tweets);
});
