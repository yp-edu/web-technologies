const path = require('path');
const express = require('express');
const session = require("express-session");

const apiCreate = require('./apiCreate.js');

// Détermine le répertoire de base
const basedir = path.normalize(path.dirname(__dirname));
console.debug(`Base directory: ${basedir}`);

const app = express()

app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: false
}));

app.use('/api', apiCreate.default());

// Démarre le serveur
app.on('close', () => {
});
exports.default = app;

