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
	newPassword
		.save()
		.then(pass => {
			res.status(200).json({
				success: "Password saved",
				pass
			});
		})
		.catch(err => {
			console.log(err)
			return res.status(400).send({ err });
		});
};

const passwordLogin = (req, res) => {
	const { use, password } = req.body;
	Password.findOne({ use })
		.then(pass => {
			console.log("in pass", pass);
			pass.checkPassword(password, (err, hashMatch) => {
				console.log("nonMatch",err);
				console.log("hashMatch",hashMatch);
				if (err !== null) {
					res
						.status(422)
						.json({ error: "That is the wrong password for this Usage" });
					return;
				}
				if (hashMatch) {
					res.json({ success: "Capstone" });
				}
				else if (!hashMatch) {
					res.json({ faliure: "Wrong password" });
				}

			});
		})
		.catch(err => {
			console.log("error", err);
			res.status(500).json({ error: err });
		});
};

module.exports = {
	POST: createPassword,
	POST_LOGIN: passwordLogin
};
