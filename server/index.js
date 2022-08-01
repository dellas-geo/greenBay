const express = require("express");
const app = express();
const { User } = require("./db/models");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.post("/create", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const user = await User.create({username, password})
    return res.json(user);
  }catch(err){
    console.log(err);
    return res.status(500).json(err);
  }

});

app.listen(3001, () => {
  console.log("Server is up and running");
});
