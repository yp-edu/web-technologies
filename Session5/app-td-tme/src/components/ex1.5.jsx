import { useState } from 'react';

import Livre from "./Livre2";

function App() {
	const dateAuj = new Date();
	const dateE = new Date(2023, 1, 19);
	
	const [titreCollection, setTitreCollection] = useState("");	
	const [livres, setLivres] = useState([
		{auteur: "Hugo Victor", titre: "La Légende des siècles", emprunt: {statut: false, dateEmprunt:dateAuj}, cote: "HUG001"},
		{auteur: "Hugo Victor", titre: "Les Misérables", emprunt: {statut: false, dateEmprunt:dateAuj}, cote: "HUG002"},
		{auteur: "Zola Émile", titre: "L'Assommoir", emprunt: {statut: true, dateEmprunt:dateE}, cote: "ZOL001"}
	]);
	
	const changeTitre = (evt) => setTitreCollection(evt.target.value);
	
	const addLivre = (evt) =>{
		evt.preventDefault();
		// pour tester avec des données statiques
		// setLivres([...livres, {auteur: "Barjavel René", titre: "La Nuit des Temps", emprunt: {statut: false, dateEmprunt:dateAuj}, cote: "BAR001"}]);
		setLivres([...livres, {auteur: document.getElementById("chp_auteur").value, titre: document.getElementById("chp_titre").value, emprunt: {statut: false, dateEmprunt:dateAuj}, cote: document.getElementById("chp_cote").value}]);
	}
	
	return (
	<div>
		<h1>{titreCollection}</h1>
		<label htmlFor="chp_collec">Titre de la collection ?</label><input id="chp_collec" onChange={changeTitre}/>
		<ul>
			{livres.map( (livre) => <Livre auteur={livre.auteur} titre={livre.titre} cote={livre.cote} emprunt={livre.emprunt} />
			) }
		</ul>
		<form onSubmit={addLivre}>
			<label htmlFor="chp_titre">Titre</label><input id="chp_titre" /><br />
			<label htmlFor="chp_auteur">Auteur</label><input id="chp_auteur" placeholder="Nom Prénom" /><br />
			<label htmlFor="chp_cote">Cote</label><input id="chp_cote" placeholder="INIxxx" /><br />
			<button type="submit">Ajouter un livre</button>
		</form>
	</div>
	);
}

export default App;
