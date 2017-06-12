let express = require('express')
let router = express.Router()
let app = express()

app.get('/', (req, res) => {
	console.log('hello world')
})
