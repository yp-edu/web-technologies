import {useState} from 'react'

import Card from './1.5'

function CardList (props) {
	const [cartes, setCartes] = useState(props.cartes);

	return <div className="cardlist">
			{
			props.cartes.map ( (card, index) => (
				<Card key={index} symbol={card.symbol} affichage={card.display} />
			))
			}
		</div>;
}
	
export default CardList;
