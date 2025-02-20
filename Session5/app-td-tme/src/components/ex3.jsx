import { useState, useRef, useEffect } from 'react';

function App() {
	const [code, setCode] = useState (0);
	const [RWX, setRWX] = useState({r: false, w: false, x: false});

	const read = useRef(null);
	const write = useRef(null);
	const execute = useRef(null);	
	
	const changeCode = (evt) => {
		setRWX({r: Boolean(read.current.checked), w: Boolean(write.current.checked), x: Boolean(execute.current.checked)});
	}
	
	// Conversion dynamique de type en JS: true converti en 1 et false en 0 pour la multiplication	
	useEffect ( () => {setCode(RWX.r*4+RWX.w*2+RWX.x); }, [RWX]);
		
	return (
	<div>  
		<label htmlFor="read" lang="en">Read</label><input type="checkbox" id="read" checked={RWX.r} onChange={changeCode} ref={read}/>
		<label htmlFor="write" lang="en">Write</label><input type="checkbox" id="write" onChange={changeCode} checked={RWX.w} ref={write}/>
		<label htmlFor="execute" lang="en">Execute</label><input type="checkbox" id="execute" onChange={changeCode} checked={RWX.x} ref={execute} />		
    	<p>Code numérique correspondant : {code}.</p>
	</div>
	);
}

export default App;