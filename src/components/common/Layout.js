import { useEffect, useRef } from 'react';

function Layout(props) {
	let frame = useRef(null);

	useEffect(() => {
		frame.current.classList.add('on');
	}, []);

	return (
		<section
			className={`content ${props.name}`}
			ref={frame}
			style={{ backgroundColor: 'rgba(248, 248, 248, 0.45)' }}>
			<div className='sub_visual'>
				<div className='text'>
					<div className='small'>
						<p>{props.num}</p>
					</div>
					<div className='title'>
						<h1>{props.name}</h1>
					</div>
				</div>
			</div>
			<div className='inner'>{props.children}</div>
		</section>
	);
}

export default Layout;
