const express = require("express");
const app = express();

const userModel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/create", async (req, res) => {
  let createuser = await userModel.create({
    name: "Rishita",
    username: "rishita123",
    email: "rishita@example.com",
  });
  res.send(createuser);
});

app.get("/update", async (req, res) => {
  let updateuser = await userModel.findOneAndUpdate(
    { name: "Rishit" },
    { username: "rishit_updated" },
    { new: true }
  );
  res.send(updateuser);
});

app.get("/read", async (req, res) => {
  let readuser = await userModel.find();
  res.send(readuser);
});

app.get("/delete", async (req, res) => {
  let user = await userModel.findOneAndDelete({ name: "Rishit" });
  res.send(user);
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});
