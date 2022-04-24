import React from 'react';
import { useSelector } from 'react-redux';

function View() {
	const { flickr } = useSelector((state) => state.flickrReducer);

	return (
		<section id='view' className='myScroll'>
			<h1>Recent Gallery</h1>
			<div>
				{flickr.map((item, idx) => {
					if (idx < 3) {
						return (
							<div key={idx}>
								<div className='pic'>
									<img
										src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
									/>
								</div>
								<h2>{item.title}</h2>
							</div>
						);
					}
				})}
			</div>
		</section>
	);
}

export default View;
