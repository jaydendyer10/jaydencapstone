const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    item: String,
    amount: String,
    purchasedWith: String,
    datePurchased: Date
});

mongoose.model('Item', ItemSchema);