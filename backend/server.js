const express = require('express')
const cors = require('cors')
const Datastore = require('nedb')
const jwt = require('jsonwebtoken');
require("dotenv").config();
const app = express();
const User = require('./models/User.js');

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

app.listen(5000)
