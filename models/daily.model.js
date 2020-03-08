const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dailySchema = new Schema({
    trip_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    destinations: [],
    milage:[],
    hotel_name: {
        type: String
    }
    

})

const User = mongoose.model('Daily', dailySchema);
module.exports = Daily;