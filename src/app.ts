import express from "express";

const app = express();
const port = 4000;

app.post("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
