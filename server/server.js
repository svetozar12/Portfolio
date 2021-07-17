const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// require("dotenv").config();
//middleware / routing

app.use(express.static(__dirname + "/public"));

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(bodyParser.json());

// app.post("/download", function (req, res) {
//   const file = `${__dirname}/file.txt`;
//   res.download(file);
// });

app.get("/", (req, res) => {
  const file = `${__dirname}/file.txt`;
  res.download(file); // Set disposition and send it.
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`My port is running on port ${port}`);
});
