import { useEffect, useRef, useState } from 'react';

function Layout(props) {
	let frame = useRef(null);

	const cursor = useRef(null);
	//const [cursorX, setCursorX] = useState(0);
	//const [cursorY, setCursorY] = useState(0);

	const handleMove = (e) => {
		cursor.current.style.left = e.clientX + 'px';
		cursor.current.style.top = e.clientY + 'px';
	};

	useEffect(() => {
		frame.current.classList.add('on');
		window.addEventListener('mousemove', handleMove);

		return () => window.removeEventListener('mousemove', handleMove);
	}, []);

	return (
		<section className={`content ${props.name}`} ref={frame}>
			<figure></figure>
			<div className='sub_visual'>
				<div className='inner'>
					<div className='text'>
						{/* <div className='small'>
						<p>Our {props.name}</p>
					</div> */}
						<div className='title'>
							<h1>{props.name}</h1>
							<div className='cursor' ref={cursor}></div>
						</div>
					</div>
				</div>
			</div>
			<div className='inner'>{props.children}</div>
		</section>
	);
}

export default Layout;
