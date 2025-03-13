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

router.post('/api', express.json(), (req, res) =>{
	const {name, nb1, nb2} = req.body;
	try {
		if (!name ) {
			res.status(400).json({
				status: 400,
				"message": "Requête invalide : name nécessaire"
			});
			return;
		}
		if (!((typeof nb1) == 'number') || !((typeof nb2) == 'number')) {
			res.status(400).json({
				status: 400,
				"message": "Requête invalide : nb1 et nb2 doivent être des nombres"
			});
			return;
		}
		console.log(name);
		res.json({addition: Number(nb1)+Number(nb2),prop: "hello"});
		res.end();
	}
	catch (e) {
        res.status(500).json({
            status: 500,
            message: "erreur interne",
            details: (e || "Erreur inconnue").toString()
        });
    }
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
