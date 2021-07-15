const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/download", function (req, res) {
  const file = `${__dirname}/upload_folder/file.txt`;
  res.download(file);
  console.log(`it wokrs`);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
