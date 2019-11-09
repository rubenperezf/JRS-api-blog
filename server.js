const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const userRoutes = require('./src/routes/userRoutes')
const webpageRoutes = require('./src/routes/webpageRoutes')
const blogpostRoutes = require('./src/routes/blogpostRoutes')
const newsletterRoutes = require('./src/routes/newsletterRoutes')


const cors = require('cors')

const app = express()
const PORT = 3000

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/todos', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect("mongodb+srv://hola:hola@cluster0-im5lw.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

userRoutes.routes(app)
webpageRoutes.routes(app)
blogpostRoutes.routes(app)
newsletterRoutes.routes(app)

const start = () => {
    return app.listen(PORT, () => {
        console.log(`server is running on ${PORT}`)
    })
}

module.exports = { start }