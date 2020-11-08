const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const Datastore = require("nedb-promise")
require("dotenv").config();
const dbUsers = new Datastore
	({
		filename: "./users.db",
		autoload: true
	});

module.exports = {
	async register(body) {
		//fields for creating a new user
		const passwordHash = await bcrypt.hash(body.password, 10);
		const newUser = {
			username: body.username,
			password: passwordHash
		}
		return await dbUsers.insert(newUser)
	},

	async auth(body) {
		const password = body.password;
		const user = await dbUsers.findOne({ username: body.username });

		//conditionals, checking if the user login creditendtials are correct or not then returns according to result.
		if (!user) {
			return false;
		} else {
			// if the email is correct, the next step will be to check if the passwords match and return a true or false statement.
			const OK = await bcrypt.compare(password, user.password);
			//if password is correct run this.
			if (OK) {
				const SECRET = process.env.SECRET;

				const payload = {
					userID: user._id
				}

				//makin a token
				const token = jwt.sign(payload, SECRET)

				return {
					token,
					user: {
						username: user.username
					}
				}
			} else {
				// Password check shows incorrections, return false
				return false;
			}
		};
	}
}
