const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();
const port = 8000;

router.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
    res.send('Tout va à merveille');
});

router.get('/test1', (req, res) => {
    res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
    res.send('Tout va à merveille pour cette page 1');
});

router.get('/essai:xxx', (req, res) => {
    res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
    res.send(`Tout va à merveille pour cette page ${req.params.xxx}`);
});

// Not needed because of the static middleware
// router.get('/test.html', (req, res) => {
//     res.sendFile(path.join(__dirname,'/public/test.html'));
// });

router.use((req, res) => {
    res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
    res.status(404).send('Cette page n’existe pas');
});

app.use(express.static(path.join(__dirname, 'public')))
app.use('/', router);

app.listen(port, () => {
    console.log(`[INFO] Server is running at http://localhost:${port}/`);
});
