let mongoose = require('mongoose');
let booksModel = mongoose.Schema({
    name: String,
    author: String,
    description: String,
    price: Number
},
{
    collection:"books"
});

module.exports = mongoose.model('book',booksModel);