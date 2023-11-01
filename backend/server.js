require('dotenv').config()

const express = require('express')

const app = express()

app.get('/' , (req, res) => {
    res.json({mssg: 'welcome to'})
})

//listen for requests
app.listen(process.env.PORT , () => {
    console.log('listening on port '+ process.env.PORT)
})