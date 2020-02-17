const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('config');


const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

// db Config
const db = config.get('MONGODB_URI');

mongoose.connect(db, 
{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
})

//Use Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

app.listen(port, () => console.log(`Server started on port ${port}`));