const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;




const uri = process.env.MONGODB_URI;

mongoose.connect(uri, 
{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
})

//Use Routes
app.use('/api/users', require('./routes/api/users'));

app.listen(port, () => console.log(`Server started on port ${port}`));