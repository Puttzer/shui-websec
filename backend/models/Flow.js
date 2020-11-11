const Datastore = require("nedb-promise");
const flowItems = new Datastore({
	filename: "../streams.db",
	autoload: true,
});

const Cryptr = require('cryptr');
const cryptr = new Cryptr("1234Tomat")

require("dotenv").config();

module.exports = {

}