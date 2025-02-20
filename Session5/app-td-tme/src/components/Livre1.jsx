function Livre(props) {
	
  return (
		<li><p>Titre : {props.titre} ; Auteur : {props.auteur} ; Cote : {props.cote}</p>	</li>  
  );
}

export default Livre;