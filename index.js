const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("This is my demo app using Node.JS and Express! - Konstantin-tr");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
