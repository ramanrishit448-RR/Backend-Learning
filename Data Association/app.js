const express = require("express");
const app = express();
const usermodel = require("./models/user");
const postmodel = require("./models/post");

app.get("/", (req, res) => {
  res.send("Hello Rishit you have a great name!");
});

app.get("/create", async (req, res) => {
  let user = await usermodel.create({
    username: "rishit123",
    age: 23,
    email: "rishit@example.com",
  });
  res.send(user);
});

app.get("/post/create", async (req, res) => {
  let post = await postmodel.create({
    postdata: "This is my first post",
    user: "690346d4d5e4c1645091ef7e",
  });
  let user = await usermodel.findOne({ _id: "690346d4d5e4c1645091ef7e" });
  user.posts.push(post._id);
  await user.save();
  res.send({
    post,
    user,
  });
});

app.listen(3000, () => console.log("Server started"));
