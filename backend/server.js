const app = require('./app')

const mongoose = require('mongoose')


// Connecting mongoDB Database
mongoose
    .connect('mongodb://127.0.0.1:27017/mydatabase')
    .then((x) => {
        console.log(`Connected to MongoDB! Database name: "${x.connections[0].name}" `)
    })
    .catch((err) => {
        console.log('Failed to connect to MongoDB', err.reason)
    })

//PORT
const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
