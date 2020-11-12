require("dotenv").config();
const express = require('express')
const cors = require('cors')
const Datastore = require('nedb-promise')
const jwt = require('jsonwebtoken');
const app = express();
const User = require('./models/User.js');
const Flow = require('./models/Flow.js');
const Tags = require('./models/Tags')
const { verify } = require('./verify')

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
		response.send("Login failed")
	}
})

app.get('/api/flow', verify, async (request, response) => {
	// await Flow.insertPlaceholderFlows();
	const flowItems = await Flow.getDecrypedFlows();

	// console.log(flowItems)

	if (flowItems) {
		response.json(flowItems)
	} else {
		response.status(401).json({ error: 'Couldnt get resources' })
	}
})

app.post('/api/tags', verify, async (req, res) => {
	// console.log(req.body)
	const tags = await Tags.insertedTags(req.body, req.user.userID)
	if (tags) {
		res.json({ message: 'Banan' })
		return
	}
	res.status(401).json({ error: 'Couldnt get resources' })
})

app.get('/api/tags', verify, async (req, res) => {
	const tags = await Tags.getAllTags(req.user.userID)
	if (tags) {
		res.json(tags)
		return
	}
	res.status(401).json({ error: 'Couldnt get resources' })
})

app.delete('/api/user', verify, async (req, res) => {
	// console.log(req.body)
	const tags = await User.deleteUser(req.user.userID)
	if (tags) {
		res.json({ message: 'User Removed' })
		return
	}
	res.status(401).json({ error: 'Couldnt get resources' })
})


app.listen(5000)
