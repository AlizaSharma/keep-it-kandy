const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/DATABASE-NAME-HERE'); // Make sure to add db name at some point

module.exports = mongoose.connection;
