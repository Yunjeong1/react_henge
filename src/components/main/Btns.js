import React from 'react';

function Btns(props) {
	return (
		<ul className='btns'>
			<li className='on' onClick={() => props.idx(0)}></li>
			<li onClick={() => props.idx(1)}></li>
			<li onClick={() => props.idx(2)}></li>
			<li onClick={() => props.idx(3)}></li>
			<li onClick={() => props.idx(4)}></li>
			<li onClick={() => props.idx(5)}></li>
		</ul>
	);
}

export default Btns;
