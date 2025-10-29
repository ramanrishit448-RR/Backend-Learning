const express = require("express");

const app = express();

app.use(function (req, res, next) {
  console.log("middleware is working");
  next();
});
app.use(function (req, res, next) {
  console.log("middleware is working again");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello Rishit you have a great name!");
});
app.get("/about", (req, res) => {
  res.send("This is the about page");
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(3000);

// CUSTOM middleware example

// const express = require("express");
// const app = express();

// function myLogger(req, res, next) {
//   console.log("Custom log:", req.method, req.url);
//   next(); // bina next() ke aage nahi badhega
// }

// app.use(myLogger);

// app.get("/", (req, res) => {
//   res.send("Hello from custom middleware example!");
// });

// app.listen(3000, () => console.log("Server started"));

// THIRD-PARTY Middleware (External libraries)

// const express = require("express");
// const morgan = require("morgan");
// const cors = require("cors");
// const helmet = require("helmet");

// const app = express();

// app.use(morgan("dev")); // console me request details print karega
// app.use(cors()); // Cross-Origin Resource Sharing enable karega
// app.use(helmet()); // Security headers add karega

// app.listen(3000, () => console.log("Server running on port 3000"));

// BUILT-IN Middleware

// const e = require("express");
// const express = require("express");

// const app = express();

// // JSON body parse karne ke liye
// app.use(express.json( ));

// // Form data parse karne ke liye
// app.use(express.urlencoded({ extended: true }));

// // Public folder se static files(CSS, images, JS) serve karne ke liye
// app.use(express.static("public"));

// app.listen(3000, () => console.log("Server started"));
