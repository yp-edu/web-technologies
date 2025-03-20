const express = require('express');
const port = 8000;

const app = express();

app.use(express.json());

app.get('/', (req, res) =>{ 
	res.setHeader('Content-type', 'text/plain;charset=UTF-8');
	res.send('Message reçu');
})
app.post('/', (req, res) =>{
	console.log("Requête POST reçue : "+req.body.texte);
	res.end();
})

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
