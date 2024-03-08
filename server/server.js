const express = require("express");
const mongoose = require("mongoose");
const User = require("./Model/user_model");
const app = express();
require("dotenv").config();

app.use(express.json());
mongoose
  .connect(
    `mongodb+srv://${process.env.NAME}:${process.env.PASSWORD}@atlascluster.ci2lv2t.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster`
  )
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  return res.send("hello new wenb");
});

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const new_data = new User({ name, email, password });
  new_data.save();
  return res.json(await User.find());
});

app.listen(3000, () => console.log("server started"));
