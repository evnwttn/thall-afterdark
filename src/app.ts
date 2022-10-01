import express from "express";
import { cors } from "./middleware";
import { postHandler } from "./handlers";

const app = express();
const port = 4000;

app.use(cors);

app.post("/", postHandler);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
