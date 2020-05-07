const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

//import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

//Middlewares
app.use(express.json());

//Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);


//DB connection
mongoose.connect(process.env.DBCONNECTION_STRING,
    { useNewUrlParser: true },
    () => {
        console.log('DB connected! and state is ' + mongoose.connection.readyState);
    });

//Start server
app.listen(3000, () => {
    console.log("Server started");
});
