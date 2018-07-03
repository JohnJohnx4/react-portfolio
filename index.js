const path = require("path");
const express = require("express");
const cors = require("cors");
const server = express();

//const database = process.env.MONGODB_URI;
const database =
  "mongodb://heroku_xg4w1nkl:3edmarmhupgjskbaj1vbe29i4m@ds237409.mlab.com:37409/heroku_xg4w1nkl";

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);
server.use(express.json());
const dev = server.get("env") !== "production";

const corsOptions = {
  origin: "https://shattered-iron.herokuapp.com",
  credentials: true,
  methods: "GET,PUT,POST,DELETE"
};

server.use(express.static(path.join(__dirname, "./Shattered_Iron")));

server.use(cors(corsOptions));

server.get("*", (req, res) => {
  res.sendFile(path.join(`${__dirname  }/Shattered_Iron/index.html`));
});

server.listen(PORT, (req, res) => {
  console.log("Server listening on: ", PORT);
});
