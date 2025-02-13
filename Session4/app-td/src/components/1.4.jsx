import { useState } from'react';

function Card(props) {
    const [affichage, setAffichage] = useState(props.affichage)
    return <div className="Cards"> {affichage ==='visible' ? props.symbol :'-'} </div>;
}

export default Card;