import { useEffect, useState } from 'react';
import axios from 'axios';

const path = process.env.PUBLIC_URL;

function Collection() {
	const path = process.env.PUBLIC_URL;
	const [items, setItems] = useState([]);

	useEffect(() => {
		axios.get(`${path}/DB/collection.json`).then((json) => {
			setItems(json.data.data);
		});
	}, []);
	return (
		<section id='collection' className='myScroll'>
			<div className='inner'>
				<span>Style Inspiration</span>
				<h1>NEW SPRING COLLECTION</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
					animi
					<br /> expedita facere magni repellendus aut corrupti labore, quae
					itaque quo
				</p>
				<div className='wrap'>
					{items.map((item, idx) => {
						return (
							<article key={idx}>
								<div className='pic'>
									<img src={`${path}/img/${item.pic1}`} alt='상품1-1' />
									<img src={`${path}/img/${item.pic2}`} alt='상품1-2' />
								</div>
								<h2>{item.name}</h2>
								<p>{item.price}</p>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Collection;
