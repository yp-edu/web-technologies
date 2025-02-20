import { useState, useEffect } from 'react';

function App() {
	const [chaine1, setChaine1] = useState ("");
	const [chaine2, setChaine2] = useState ("");

	const changeChaine1 = (evt) =>{
		setChaine1(evt.target.value);
	}

	const changeChaine2 = (evt) =>{
		setChaine2(evt.target.value);
	}

	useEffect ( () => {
		console.log(`Première chaîne : ${chaine1} et deuxième chaîne : ${chaine2}`);
	}, [chaine1, chaine2]);

  return (
    <div>
    	<label htmlFor="chp_str1">Première chaîne</label>
    	<input id="chp_str1" onChange={changeChaine1} />
		<label htmlFor="chp_str2">Deuxième chaîne</label>
    	<input id="chp_str2" onChange={changeChaine2} />
    </div>
  );
}

export default App;
