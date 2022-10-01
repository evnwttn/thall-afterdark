import express from "express";
import { cors } from "./middleware";
import { Request, Response } from "express";

const app = express();
const port = 4000;

app.use(cors);

app.post("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
