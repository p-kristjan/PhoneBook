const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    phoneNumber: {
        type: String
    }
});

mongoose.model('Contact', contactSchema);