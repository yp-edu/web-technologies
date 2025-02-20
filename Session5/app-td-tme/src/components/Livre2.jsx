import './Livre.css';

function Livre(props) {
	
  return (
		<li><p>Titre : {props.titre} ; Auteur : {props.auteur} ; Cote : {props.cote}</p>
			<p className={"emprunt"+props.emprunt.statut}>{props.emprunt.statut? "Livre emprunté le "+props.emprunt.dateEmprunt.toLocaleDateString():"Livre disponible"}</p>	
		</li>  
    
  );
}

export default Livre;