const express = require('express')
const bodyparser = require('body-parser')
const Datastore = require('nedb')
const db = new Datastore({ filename: 'users.db' })
const app = express()

app.use(bodyparser.json());

// get all users
app.get('/users', (request, response) => {
	db.find({}, (error, users) => {
		response.send(users)
	})
})
//get a single user
app.get('/users/:id', (request, response) => {
	db.findOne({ _id: request.params.id }, (error, user) => {
		if (user) { response.send(user) } else {
			response.send('you done fucked up a-aron')
		}
	})

})
//UPATEDE
app.put('/users/:id', (request, response) => {
	const username = request.body.username
	const password = request.body.password

	db.update({ _id: request.params.id }, { username, password }, () => {
		response.send(`the username: ${username} has been updated`)
	})
})
//DELELELELELTE
app.delete('/users/:id', (request, response) => {
	const username = request.body.username
	const password = request.body.password

	db.remove({ _id: request.params.id }, {}, () => {
		response.send(`the username: ${username} has been removed`)
	})
})

//create a user
app.post('/users', (request, response) => {
	const username = request.body.username
	const password = request.body.password

	db.find({ username }, (error, users) => {
		if (users.length === 0) {
			db.insert({ username, password }, function (err, newDoc) {
				response.send('User inserted into database')
			});
		} else {
			response.send(`the username: ${username} is already in use`)
		}
	})
	console.log(request.body)

})

db.loadDatabase();

app.listen(5000)