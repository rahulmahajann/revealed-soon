const express = require('express');
const path = require('path');

const router = express.Router();

// jo route .use mien use hota hai wo uski bas existence check krta hai agr same hoga to wo chlega!
// so home route ko ek dum last mien rkhna chye!
router.get('/', (req, res, next) => {
    // res.send('hello this is home route just btw! :)');
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

// console.log(path.join(__dirname,'view','shop.js'));

module.exports = router;