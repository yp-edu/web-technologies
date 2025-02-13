import { useState } from 'react';
import CardList from "./2.2"
import FormAddCarte from "./3.1"

function PageCard (props) {
	
	const [cartes, setCartes] = useState([
		{ id:1, symbol: "toto", display: 'visible'},
		{ id:2, symbol: "tata", display: 'hidden'},
		{ id:3, symbol: "titi", display: 'hidden'},
		{ id:4, symbol: "tutu", display: 'visible'}]);
		
	const addCarte = (evt) => {
		let newCard = {};
		newCard.id=cartes.length+1;
		newCard.symbol=document.getElementById("chp_symbol").value;
		newCard.display=document.getElementById("menu_visible").value;
		setCartes([...cartes, newCard]);
	}
	
	return(
		<div>
			<CardList cartes={cartes}/>
			<FormAddCarte handleAdd={addCarte}/>
		</div>
    );
}

export default PageCard;
