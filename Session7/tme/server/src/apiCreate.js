const express = require("express");
const Users = require("./entities/users.js");

function init(db) {
	const router = express.Router();
	// On utilise JSON
	router.use(express.json());
	// Pour garder une trace de toutes les requêtes
	router.use((req, res, next) => {
		console.log('API: method %s, path %s', req.method, req.path);
		console.log('Body:', req.body);
		next();
	});
	const users = new Users.default(db);
	router.post("/user/login", async (req, res) => {
		try {
			const { login, password } = req.body;
			// Paramètres manquants dans la requête HTTP
			if (!login || !password) {
				res.status(400).json({
					status: 400,
					"message": "Requête invalide : login et password nécessaires"
				});
				return;
			}
			if(! await users.exists(login)) {
				res.status(401).json({
					status: 401,
					message: "Utilisateur inconnu"
				});
				return;
			}
			let userid = await users.checkpassword(login, password);
			if (userid) {
				// Avec middleware express-session
				req.session.regenerate(function (erreur) {
					if (erreur) {
						res.status(500).json({
							status: 500,
							message: "Erreur interne"
						});
					}
					else {
						// C'est bon, nouvelle session créée
						req.session.userid = userid;
						res.status(200).json({
							status: 200,
							message: "Login et mot de passe acceptés"
						});
					}
				});
				return;
			}
			// Faux login : destruction de la session et erreur
			req.session.destroy((err) => { });
			res.status(403).json({
				status: 403,
				message: "login et/ou mot de passe invalide(s)"
			});
			return;
		}
		catch (e) {
			// Toute autre erreur
			res.status(500).json({
				status: 500,
				message: "erreur interne",
				details: (e || "Erreur inconnue").toString()
			});
		}
	});

	return router;
}
exports.default = init;