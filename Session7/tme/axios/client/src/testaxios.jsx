import axios from 'axios';

import { useState } from 'react';

function TestAxios() {
	const [champ, setChamp] = useState("");
	
	const envoi = (evt) => {
		evt.preventDefault();
		axios.post('http://localhost:8000/', {texte: champ})
			.then(console.log("envoi requête POST"));
	}

	const handleInput = (evt) => {
		setChamp(evt.target.value);
	}

  return (
		<form>
			<label htmlFor="chp">Valeur</label><input id="chp" onChange={handleInput} />
			<button onClick={envoi}>OK</button>
		</form>
  )
}

export default TestAxios
