const mongoose = require('mongoose');

const Product = require('./modelss/product');

mongoose.connect('mongodb+srv://shivacherukunuri:shivaprasad@cluster0.kgq4878.mongodb.net/'
).then(() => {
    console.log('Connected to the database!')

}).catch(() => {
    console.log('Connection failed!')
});
