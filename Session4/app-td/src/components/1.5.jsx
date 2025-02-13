import { useState } from 'react';

function Card(props) {
    const [affichage, setAffichage] = useState(props.affichage);

    function handleCardClick () {
        setAffichage('visible');
    }

    return <div className="Cards" onClick={handleCardClick}> {affichage === 'visible' ? props.symbol : '-'}</div>;
}

export default Card;