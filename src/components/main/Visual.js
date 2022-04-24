import React from 'react';

function Visual() {
	const path = process.env.PUBLIC_URL;

	return (
		<figure id='visual' className='myScroll'>
			<video autoPlay loop muted frameBorder='0'>
				<source src={`${path}/img/henge.mp4`} type='video/mp4' />
			</video>
			<div className='inner'>
				<h1>
					The Metaphysics
					<br />
					<span>of Beauty</span>
				</h1>
			</div>
		</figure>
	);
}

export default Visual;
