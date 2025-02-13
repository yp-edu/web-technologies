function Logout (props) {	
  return (
	<div>
		<button className="button" onClick={props.logout}>logout</button>
	</div>
   );
}

export default Logout;