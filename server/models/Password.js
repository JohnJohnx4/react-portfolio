// Optional bool in PasswordSchema to control admin privileges, commented out right now

const mongoose = require("mongoose");
const validate = require("mongoose-validator");
var bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

let PasswordSchema = new Schema({
  use: {
    type: String,
    required: true
  },
	password: {
		type: String,
		validate: [
			validate({
				validator: "isLength",
				arguments: [6, 80],
				message: "Password must at least have 6 characters"
			})
		]
	}
});

PasswordSchema.pre("save", function(next) {
	bcrypt.hash(this.password, 11, (err, hash) => {
		if (err) return next(err);
		this.password = hash;
		next();
	});
});

PasswordSchema.methods.checkPassword = function(potentialPassword, cb) {
	bcrypt.compare(potentialPassword, this.password, (err, isMatch) => {
		if (err) return cb(err);
		cb(null, isMatch);
	});
};

module.exports = mongoose.model("Password", PasswordSchema);
