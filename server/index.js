const express = require ('express')
const Ctrl = require('./controller.js')

const app = express()
const port = 3005

app.use(express.json())



app.listen(port, () => {
    console.log('we be listening on port', port)
})