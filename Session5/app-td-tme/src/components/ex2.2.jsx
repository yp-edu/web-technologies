import { useState, useRef, useEffect } from 'react';

function App() {

	const [compteur, setCompteur] = useState(0);	
	
	const chaine1 = useRef(null);
	const chaine2 = useRef(null);
	
	useEffect ( () => {
		console.log(`Itération ${compteur} : ${chaine1.current.value} et ${chaine2.current.value}`);
	}, []);
	
	const incrCompteur = (evt) => setCompteur(compteur+1);
	
	return (
		<div>
			<label htmlFor="chp_chaine1">Première chaîne</label>
			<input id="chp_chaine1" ref={chaine1}/>
			<label htmlFor="chp_chaine2">Deuxième chaîne</label>
			<input id="chp_chaine2" ref={chaine2}/>
			<br/>
			<button onClick={incrCompteur}>Nouvelles chaînes</button>
		</div>
	);
}

export default App;
