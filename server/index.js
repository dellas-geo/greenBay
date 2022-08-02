import express from "express";
import { api } from "./src/routes/index.js";
import cors from "cors";
import db from "./src/db/models/index.js";

const app = express();

app.use(cors());
app.use("/api", api);

db.sequelize.sync().then((req) => {
  app.listen(3001, () => {
    console.log("Server is up and running");
  });
});

