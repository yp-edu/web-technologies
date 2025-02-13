import Login from './login';
import Logout from './logout';

function NavigationPanel (props) {	
  return (
	<nav id="navigation_pan">
		{(props.isConnected) ? <Logout logout={props.logout}/> : <Login login={props.login}/>}
	</nav>
   );
}

export default NavigationPanel;