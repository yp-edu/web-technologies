const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();
const port = 8000;

router.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
    res.send('Tout va à merveille');
});

router.post('/api', express.json(), (req, res) =>{
	console.log(req.body.name);
    res.setHeader('Content-Type', 'application/json');
	res.json({addition: Number(req.body.nb1)+Number(req.body.nb2),prop: "hello"});
	res.end();
})

router.use((req, res) => {
    res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
    res.status(404).send('Cette page n’existe pas');
});

app.use(express.static(path.join(__dirname, 'public')))
app.use('/', router);

app.listen(port, () => {
    console.log(`[INFO] Server is running at http://localhost:${port}/`);
});
