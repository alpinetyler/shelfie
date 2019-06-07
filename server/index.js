const express = require ('express')
const massive = require('massive')
require('dotenv').config()

const Ctrl = require('./controller.js')

const app = express()

app.use(express.json())

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING).then(dbInstance => {
    console.log('connected to db')
    app.set('db', dbInstance)
}).catch(err => console.log(err));

app.get('/api/inventory', Ctrl.read)

app.listen(SERVER_PORT, () => {
    console.log('we be listening on port', SERVER_PORT)
})