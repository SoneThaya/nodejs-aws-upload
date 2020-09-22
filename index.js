require("dotenv/config");

const express = require("express");

const multer = require("multer");

const app = express();
const port = 8000;

const storage = multer.memoryStorage({
  destination: function (req, file, callback) {
    callback(null, "");
  },
});

const upload = multer({ storage }).single('image')

app.get("/upload", (req, res) => {
  res.send({
    message: "hello world",
  });
});

app.listen(port, () => {
  console.log(`Server is up at ${port}`);
});
