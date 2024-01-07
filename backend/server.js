// require('dotenv').config()
const cors = require('cors');
// const cookieParser = require('cookie-parser');

const express = require('express')
const mongoose = require('mongoose')
const usersRoutes = require('./routes/users')
const assetsRoutes = require('./routes/assets');
const corsOptions = require('./config/corsOptions');
const credentials = require('./middleware/credentials');
const cookieParser = require('cookie-parser');
// const corsOptions = {
//     origin: ['http://127.0.0.1:5173', 'http://localhost:5173'],
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the allowed HTTP methods
//     allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed headers
//     credentials: true, // Enable credentials (cookies, authorization headers, etc)
// };

const app = express();

//connect to db
// console.log(process.env.MONGO_URI)
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
//  app.use(cookieParser());
// // Handle options credentials check - before CORS!
// // and fetch cookies credentials requirement
// app.use(credentials);

// app.use(cors(corsOptions)); 
// app.use(express.json());

app.use( (req, res , next) => {
    console.log(req.path , req.method)
    next()
})

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

app.use('/api/users' , usersRoutes)
app.use('/api/assets' , assetsRoutes)



