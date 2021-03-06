const path = require('path');
const express = require('express');
const fs = require('fs');
const config = require('./config.json');

const app = express();
const dir = path.join(__dirname, config.dogPath);
const dogs = fs.readdirSync(dir);

const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 30000,
    max: 100
});

app.use(limiter);

app.get('/random', function (req, res) {
    res.sendFile(`${dir}/${getRandomDog(dogs)[1]}`)
});

app.get('/dog/:index', function (req, res) {
    let dogImage = `dog.${req.params.index}.jpg`;
    if (!dogs.includes(dogImage)) res.status(404).json({error: "index out or range", min: 1, max: dogs.length});
    res.sendFile(`${dir}/${dogImage}`);
});

app.get('/', function (req, res) {
    let dogImage = getRandomDog(dogs);
    res.json({index: dogImage[0], image: `/dog/${dogImage[0]}`});
});

function getRandomDog(dogs) {
    let random = Math.floor(Math.random() * dogs.length);
    return [random, dogs[random]];
}

module.exports = {
    start: function () {
        app.listen(config.port, function () {
            console.log(`Serving http://localhost:${config.port}/`);
        });
    }
}