require("dotenv").load();
const express = require("express");
const mongoose = require("mongoose");
// const helmet = require('helmet');
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const password = require("./controllers/passwordController");
// const routes = require('./routes/');
// const keys = require('./config/keys');

const port = process.env.PORT || 5000;
const app = express();

// Connecting to mLab/port
mongoose
	.connect(
		process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio",
		{ useNewUrlParser: true }
	)
	.then(() => {
		console.log("Connected to DB");
	})
	.catch(err => {
		console.log("Error connecting to DB", err);
	});

app.listen(port, err => {
	console.log(`connected to the server port ${port}`);
});

// Middleware
// app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Routes
// routes(app);
app.get("/", (req, res) => {
	res.status(200).json("Hey, this is my server!");
});

app.route("/api/capstone/register/password").post(password.POST);
app.route("/api/capstone/login").post(password.POST_LOGIN);

// For Heroku Build
// app.use(express.static(path.join(__dirname, '../client/build')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../', 'client', 'build', 'index.html'));
// });
