// 3rd party packages!
const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');

// port details
const PORT = 3000;

const app = express();

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

// use of bodyParser
app.use(bodyParser.urlencoded({extended: false}));

// use of static files!
app.use(express.static(path.join(__dirname,'public')));

app.use('/nextpage', (req, res, next) => {
    res.send('hello this is next page route of our project!');
});

app.use('/admin', adminRouter);
app.use(shopRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

console.log(__dirname);

app.listen(PORT,()=>{
    console.log(`port is running on http://localhost:${PORT}`);
});