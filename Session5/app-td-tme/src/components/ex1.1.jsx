import { useState } from 'react';

function Page() {
	const dateAuj = new Date();
	const dateE = new Date(2023, 1, 19);
	
	const [titreCollection, setTitreCollection] = useState("");	
	const [livres, setLivres] = useState([
		{auteur: "Hugo Victor", titre: "La Légende des siècles", emprunt: {statut: false, dateEmprunt:dateAuj}, cote: "HUG001"},
		{auteur: "Hugo Victor", titre: "Les Misérables", emprunt: {statut: false, dateEmprunt:dateAuj}, cote: "HUG002"},
		{auteur: "Zola Émile", titre: "L'Assommoir", emprunt: {statut: true, dateEmprunt:dateE}, cote: "ZOL001"}
	]);
	
	return null
}

export default Page;
