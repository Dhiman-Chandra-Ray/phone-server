const express = require('express');
const cors = require('cors');
const phones = require('./phones.json');
const app = express();
const port = 3000;

app.use(cors());

app.get('/',(req, res) => {
    res.send('my phones is comming soon');
});

app.get('/phones', (req, res) => {
    res.send(phones);
});

app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`);
})