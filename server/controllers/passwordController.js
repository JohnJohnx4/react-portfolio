const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Password = require("../models/Password.js");
const bcrypt = require("bcrypt");

// if Password.findOne({use: ""})
// Password.create({
//   password: "automatichash"
// });

const createPassword = (req, res) => {
	const { use, password } = req.body;
	const newPassword = new Password({ use, password });
	newPassword.save((err, pw) => {
		if (err) {
			return res.status(400).send({ err });
		}
		res.status(200).json({
			success: "Password was saved",
			pw
		});
	});
};

const passwordLogin = (req, res) => {
	const { email, password } = req.body;
	User.findOne({ email }, (err, user) => {
		if (err) {
			res.status(500).json({ error: "Invalid Username/Password" });
			return;
		}
		if (user === null) {
			res.status(422).json({ error: "No user with that username in our DB" });
			return;
		}
		const userID = user._id;
		user.checkPassword(password, (nonMatch, hashMatch) => {
			// This is an example of using our User.method from our model.
			if (nonMatch !== null) {
				res.status(422).json({ error: "passwords dont match" });
				return;
			}
			if (hashMatch) {
				const token = getTokenForUser({
					username: user.email
				});
				res.json({ token, userID });
			}
		});
	});
};

module.exports = {
	POST: createPassword,
	POST_LOGIN: passwordLogin
};
