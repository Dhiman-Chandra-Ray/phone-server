const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=> {
    res.send('Hello World! Welcome to my Express server. This is a simple example of an Express application.');
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);   
})