import { useRef } from 'react';

const arr = [
	'Lighting',
	'Bookshelves',
	'Cabinets',
	'Tables',
	'Coffee Tables',
	'Sofas and Armchairs',
	'Chairs',
	'Bar & Kitchen',
	'Accessories',
];

const path = process.env.PUBLIC_URL;

function Product() {
	return (
		<section id='product' className='myScroll'>
			<div className='inner'>
				{arr.map((el, idx) => {
					return (
						<article key={idx}>
							<div className='text'>
								<h2>{el}</h2>
							</div>
							<div className='pic'>
								<img src={`${path}/img/${el}.jpg`} alt='product' />
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
}

export default Product;
