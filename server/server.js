const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'pub');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(2000, () => {
    console.log('server is running');
});