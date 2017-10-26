//Dependecies
let express = require("express")
let route = require('./api/routes/route')
let mongoose = require('mongoose')
let bodyParser = require('body-parser')
let config = require('./config')

//Initialize express app
let app = express()

//Define PORT
let port = process.env.PORT || 3001

//Connect to database server
mongoose.connect(config.DATABASE_URI)

//Body Parser for POST requests
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//All api routes to 'http://localhost:3000/api
app.use('/api', route)

//Listen to port 3000
app.listen(port, () => {
  console.log("Server is LIVE at port "+port)
})
