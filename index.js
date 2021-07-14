const port = 3001;
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const Cors = require("cors");
const path = require("path");

app.use(Cors());

app.use(express.static(path.join(__dirname, "../build")));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  // res.download(__dirname + "/upload_folder/image.jpeg", "image.jpeg");
  res.send("<p>base route</p>");
});

app.get("/download", function (req, res) {
  // res.download(__dirname + "/upload_folder/image.jpeg", "image.jpeg");
  res.send("<p>route download</p>");
});

app.use(express.static("client/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`The server is listening to port ${port}`);
});
