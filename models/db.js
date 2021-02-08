const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/contactDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Objekti kirjeldamine mida tuleb hallata
require('./contact');

