const router = require('express').Router();
const mongoose = require('mongoose');
const Item = mongoose.model('Item')

router.get('/', (req, res, next) => {
    Item.find({}, null, {sort: {datePurchased: 1}}, function(err, items) {
        if(err) {
            console.log(err)
        }
        res.json(items)
    })
})

router.post('/', (request, response, next) => {
    const {purchasedWith, item, datePurchased, amount} = request.body.newItem;
    const newItem = new Item({
        item,
        amount,
        datePurchased,
        purchasedWith
    });
    newItem.save()
    .then(res => {
        response.json({success: true})
    })
    .catch(err => next(err))
})

module.exports = router;