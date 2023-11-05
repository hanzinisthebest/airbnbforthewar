require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const usersRoutes = require('./routes/users')
const assetsRoutes = require('./routes/assets')

const app = express()

app.use(express.json())

app.use( (req, res , next) => {
    console.log(req.path , req.method)
    next()
})

app.use('/api/users' , usersRoutes)
app.use('/api/assets' , assetsRoutes)

//connect to db
console.log(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT , () => {
        console.log('connected to db and listening on port '+ process.env.PORT)
})
    })
    .catch(error => {
        console.log(error)
    })

