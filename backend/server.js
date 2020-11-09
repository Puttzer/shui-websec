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
// const streamsDB = require('./data/flowItems.json')

// streamsDB.streams.forEach(stream => {
// 	streams.insert({
// 		date: stream.date,
// 		tags: stream.tags,
// 		content: cryptr.encrypt(stream.content)
// 	})
// })


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// get all users
app.get('/users', (request, response) => {
	db.find({}, (error, users) => {
		response.send(users)
	})
})
//get a single user
app.get('/users/:id', (request, response) => {
	// db.findOne({ _id: request.params.id }, (error, user) => {
	// 	if (user) { response.send(user) } else {
	// 		response.send('you done fucked up a-aron')
	// 	}
	// })

})
//UPATEDE
app.put('/users/:id', (request, response) => {
	// const username = request.body.username
	// const password = request.body.password

	// db.update({ _id: request.params.id }, { username, password }, () => {
	// 	response.send(`the username: ${username} has been updated`)
	// })
})
//DELELELELELTE
app.delete('/users/:id', (request, response) => {
	// const username = request.body.username
	// const password = request.body.password

	// db.remove({ _id: request.params.id }, {}, () => {
	// 	response.send(`the username: ${username} has been removed`)
	// })
})

//create a user
app.post('/users', (request, response) => {
	// const username = request.body.username
	// const password = request.body.password

	// db.find({ username }, (error, users) => {
	// 	if (users.length === 0) {
	// 		db.insert({ username, password }, function (err, newDoc) {
	// 			response.send('User inserted into database')
	// 		});
	// 	} else {
	// 		response.send(`the username: ${username} is already in use`)
	// 	}
	// })
	// console.log(request.body)

})

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
