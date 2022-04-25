import React from 'react';

function Visual(props) {
	const path = process.env.PUBLIC_URL;

	const scrolled = props.scrolled;
	const start = props.posStart;
	const base = 300;
	const position = scrolled - start + base;

	return (
		<figure id='visual' className='myScroll'>
			<video autoPlay loop muted frameBorder='0'>
				<source src={`${path}/img/henge.mp4`} type='video/mp4' />
			</video>
			<div className='inner'>
				<h1 style={{ transform: `translateX(${-position}px)` }}>
					The Metaphysics
					<br />
					<span>of Beauty</span>
				</h1>
			</div>
		</figure>
	);
}

export default Visual;
