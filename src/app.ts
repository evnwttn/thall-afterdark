import express from "express";
import { cors } from "./middleware";
import { firestoreHandler } from "./handlers";

const app = express();
const port = 4000;

app.use(cors);
app.use(express.json());

app.post("/", firestoreHandler);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
