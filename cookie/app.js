const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

app.use(cookieParser());

app.get("/", (req, res) => {
  res.cookie("name", "Rishit").send("Cookie has been set");
});

app.get("/getcookie", (req, res) => {
  const cookie = req.cookies;
  console.log(cookie);
  res.send(cookie);
});

app.listen(3000);
