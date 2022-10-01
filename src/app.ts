import express from "express";
import { Request, Response } from "express";

const app = express();
const port = 4000;

app.post("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
