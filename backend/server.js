const express = require('express')
const cors = require('cors')
const Datastore = require('nedb-promise')
const jwt = require('jsonwebtoken');
require("dotenv").config();
const app = express();
const User = require('./models/User.js');
const { verify } = require('./verify')
const Cryptr = require('cryptr')
const cryptr = new Cryptr(process.env.SECRET)


const streams = new Datastore({
	filename: './streams.db',
	autoload: true
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//FRONTEND
app.post('/api/register', async (request, response) => {
	const user = await User.register(request.body);

	if (user) {
		response.status(201).json(user);
	} else {
		response.status(500).json({ error: "Something went wrong registering user " })
	}
})

app.post('/api/login', async (request, response) => {
	const user = await User.auth(request.body);
	if (user) {
		response.json(user);
	} else {
		response.send("Something went wrong with your registration, please try again.")
	}
})

app.get('/api/flow', verify, async (request, response) => {
	const flowItems = await streams.find({})
	if (flowItems) {
		response.json(flowItems)
		return
	}
	response.status(401).json({ error: 'Couldnt get resources' })
})

// app.get('/api/flows', async (req, res) => {

// })

app.listen(5000)
