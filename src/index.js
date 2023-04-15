import express from "express";
import { connect } from "./config/database.js";
const app = express();

import TweetService from "./services/tweet-service.js";

app.listen(3000, async () => {
  console.log("server started at port 3000");
  await connect();
  console.log("Mongo db connected");
  let ser = new TweetService();
  await ser.create({ content: "Done with #refactor" });
});
