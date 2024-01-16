const express = require("express");
const Db = require("./Database/Db");
const colors = require("colors");
const app = express();
const router = require("./Routes/Authroutes");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/api/v1", router);
Db();

app.get("/", (req, res) => {
  res.send("Welcome");
});

PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`.bgYellow);
});
