import express from "express";
import { api } from "./src/routes/index.js";
import cors from "cors";
import db from "./src/db/models/index.js";
// import Sequelize from "sequelize";

const app = express();

app.use(cors());
app.use("/api", api);
app.use(express.json());

db.sequelize.sync().then((req) => {
  app.listen(3001, () => {
    console.log("Server is up and running");
  });
});

// Test connection Sequelize/DB

// var sequelize = new Sequelize("greenbay", "root", "password", {
//   host: "127.0.0.1",
//   dialect: "mysql",
// });

// sequelize.authenticate().then(function (errors) {
//   console.log(errors);
// });

// sequelize.query("SELECT * FROM Users").then(function (result) {
//   console.log(result);
// });
