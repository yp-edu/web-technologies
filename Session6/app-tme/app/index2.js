const express = require('express');
const path = require('path');

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
    res.send('Tout va à merveille');
});

app.get('/test1', (req, res) => {
    res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
    res.send('Tout va à merveille pour cette page 1');
});

app.get('/essai:xxx', (req, res) => {
    res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
    res.send(`Tout va à merveille pour cette page ${req.params.xxx}`);
});

app.get('/test.html', (req, res) => {
    res.sendFile(path.join(__dirname,'/public/test.html'));
});

app.use((req, res) => {
    res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
    res.status(404).send('Cette page n’existe pas');
});

app.listen(port, () => {
    console.log(`[INFO] Server is running at http://localhost:${port}/`);
});
