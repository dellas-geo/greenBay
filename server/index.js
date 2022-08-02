import express from "express";
import { api } from "./src/routes/index.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use("/api", api);

app.listen(3001, () => {
  console.log("Server is up and running");
});
