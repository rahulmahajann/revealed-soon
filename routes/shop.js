const express = require('express');

const router = express.Router();

// jo route .use mien use hota hai wo uski bas existence check krta hai agr same hoga to wo chlega!
// so home route ko ek dum last mien rkhna chye!
router.get('/', (req, res, next) => {
    res.send('hello this is home route just btw! :)')
});

module.exports = router;