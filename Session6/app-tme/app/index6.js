const express = require('express')
const session = require('express-session')

const app = express()
const port = 8000

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}))

app.get('/', (req, res) => {
  if (req.session.user) {
    res.setHeader('Content-Type', 'text/plain; charset=UTF-8');
    res.status(200);
    res.write('Déjà de retour, '+req.session.user+ "?")
    res.end()
  } else {
    req.session.user = "toi"
    res.setHeader('Content-Type', 'text/plain; charset=UTF-8');
    res.status(200);
    res.end("Bienvenue")
  }
})

app.listen(port, () => {
  console.log(`[INFO] Server is running at http://localhost:${port}/`);
});