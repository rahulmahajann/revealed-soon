// 3rd party packages!
const express = require('express');
const bodyParser = require('body-parser');

// port details
const PORT = 3000;

const app = express();

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

// use of bodyParser
app.use(bodyParser.urlencoded({extended: false}));

app.use('/nextpage', (req, res, next) => {
    res.send('hello this is next page route of our project!');
});

app.use(adminRouter);
app.use(shopRouter);

app.listen(PORT,()=>{
    console.log(`port is running on http://localhost:${PORT}`);
});