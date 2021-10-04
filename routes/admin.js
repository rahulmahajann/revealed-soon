const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="data"></form><button type="submit">SignIn</button></form>');
});

router.post('/product', (req, res, next) => {
    res.redirect('/');
    console.log(req.body.data);
    console.log('redirected to home route from sigin route via content route');
});

module.exports = router;