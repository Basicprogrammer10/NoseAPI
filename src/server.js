const path = require('path');
const express = require('express');
const fs = require('fs');
const config = require('./config.json');

const app = express();
const dir = path.join(__dirname, config.dogPath);
const dogs = fs.readdirSync(dir);

app.get('/random', function (req, res) {
    res.sendFile(`${dir}/${getRendomDog(dogs)}`)
});

app.get('/dog/:index', function (req, res) {
    let dogImage = `dog.${req.params.index}.jpg`;
    if (!dogs.includes(dogImage)) res.status(404).json({"error":"index out or range"});
    res.sendFile(`${dir}/${dogImage}`);
});

app.get('/', function () {

});

function getRendomDog(dogs) {
    let random = Math.floor(Math.random() * dogs.length);
    return dogs[random];
}

module.exports = {
    start: function () {
        app.listen(config.port, function () {
            console.log(`Serving http://localhost:${config.port}/`);
        });
    }
}