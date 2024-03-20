const express = require("express");
const mongoose = require("mongoose");
const User = require("./model/user_model");
const jwt = require("jsonwebtoken")
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
  const { username, email, password } = req.body;
  const bool = await User.findOne({email})
  if(bool){
  return res.status(400).send("This email is already registered with Ditto.")
  }
  const new_data = new User({ username, email, password });
  new_data.save();
  return res.status(200).send("Your Ditto Account Created Successfully!!");
});

app.post("/login", async(req, res)=>{
  const {email, password}= req.body
  const data = await User.findOne(email)
  if(!data){
    return res.status(401).send("The Details You Entered Are Incorrect")
  }
  const payload={
    user:{
      id:data.id
    }
  }
  jwt.sign(payload, "jwtToken", {expiresIn:360000000},
  (err,token)=>{
    if(err){
  return res.status(400).send(err)
    }
    return res.json(token)
  })
})

app.listen(3000, () => console.log("server started"));
