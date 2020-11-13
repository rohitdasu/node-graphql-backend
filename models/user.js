const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: Number,
    username: String,
    password: String,
    name: String,
    phone: Number,
    email: String
});

const schema = mongoose.model('users',userSchema);

module.exports = schema;