import React from 'react';
import { useSelector } from 'react-redux';

function View(props) {
	const { flickr } = useSelector((state) => state.flickrReducer);

	const scrolled = props.scrolled;
	const start = props.posStart;
	const base = 200;
	const position = scrolled - start + base;

	return (
		<section id='view' className='myScroll'>
			<div
				className='cover'
				style={
					position >= 0 ? { transform: `translateY(${position / 12}px)` } : null
				}>
				<h1>Light according to Henge</h1>
				<div className='txt'>
					<p>
						Light is not just a service, a necessity, a convenience. It is an
						increased, infinite aesthetic path. A solemn presence that changes
						everything around.
					</p>
					<p className='btn'>+ discover</p>
				</div>
			</div>

			<div
				className='move'
				style={
					position >= 0 ? { transform: `translateY(${-position / 3}px)` } : null
				}>
				{flickr.map((item, idx) => {
					if (idx < 1) {
						return (
							<article key={idx}>
								<div className='pic'>
									<img
										src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`}
									/>
								</div>
							</article>
						);
					}
				})}
			</div>
		</section>
	);
}

export default View;
