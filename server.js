const port = 3001;

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//middleware / routing

app.use(express.static(__dirname + "/public"));

app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

app.use(bodyParser.json());

app.post("/", function (req, res) {
  const file = `${__dirname}/file.txt`;
  res.download(file);
});

app.listen(port, () => {
  console.log(`My port is running on port ${port}`);
});
