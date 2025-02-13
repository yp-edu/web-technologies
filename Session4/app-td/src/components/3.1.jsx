function FormAddCarte(props) {
	
    return(
		<form className="FormAddCard">
			<label htmlFor="chp_symbol">Symbole</label><input type="text" id="chp_symbol" />
			<label htmlFor="menu_visible">Visibilité</label>
			<select id="menu_visible">
				<option value="visible">Visible</option>			
				<option value="hidden">Hidden</option>
			</select>
			<input type="button" value="Ajouter une carte" onClick={props.handleAdd}/>
		</form>
    );
}

export default FormAddCarte;