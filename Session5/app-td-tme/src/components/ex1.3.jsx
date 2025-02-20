import { useState } from 'react';

import Livre from "./Livre1";

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
	
	return (
	<div>
		<h1>{titreCollection}</h1>
		<label htmlFor="chp_collec">Titre de la collection ?</label><input id="chp_collec" onChange={changeTitre}/>
		<ul>
			{livres.map( (livre) => <Livre auteur={livre.auteur} titre={livre.titre} cote={livre.cote} emprunt={livre.emprunt} />
			) }
		</ul>
	</div>
	);
}

export default App;
