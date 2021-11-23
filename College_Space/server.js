const express = require('express');
const server = express();
const path = require('path');

// will move to dotenv file
const PORT = 3000;

// Specifing view engine
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

server.get('/', (req, res) => {
    res.render('index');
});

server.listen(PORT, () => {
    console.log(`Serving on PORT ${PORT}`);
})