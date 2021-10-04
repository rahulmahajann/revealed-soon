const express = require('express');

const path = require('path');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="data"></form><button type="submit">SignIn</button></form>');
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    res.redirect('/');
    console.log(req.body.data);
    console.log('redirected to home route from sigin route via content route');
});

module.exports = router;