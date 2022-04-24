import React from 'react';

const path = process.env.PUBLIC_URL;
const arr = ['clothes', 'size', 'perfume'];

function Pics() {
	return (
		<section id='pics' className='myScroll'>
			<div className='inner'>
				<span>Style Inspiration</span>
				<h1>MAGAZINE</h1>
				<p className='gap'>
					Lorem ipsum dolor sit amet consectetur adipisicing
				</p>

				<div className='wrap'>
					{arr.map((data, idx) => {
						return (
							<article key={idx}>
								<div className='pic'>
									<img src={`${path}/img/${data}.jpg`} alt='잡지1' />
								</div>
								<h2>INSIDE ZARA</h2>
								<p>
									Lorem ipsum dolor sit <br />
									consectetur adipisicing
								</p>
								<div className='read'>Read More</div>
							</article>
						);
					})}

					{/* <article>
                    <div class="pic">
                        <img src="img/subNew.jpg" alt="잡지1">
                    </div>
                    <h2><a href="#">INSIDE ZARA</a></h2>
                    <p>Lorem ipsum dolor sit <br>
                        consectetur adipisicing</p>
                    <a href="#" class="read">Read More</a>
                </article>
                <article>
                    <div class="pic">
                        <img src="img/main4.png" alt="잡지2">
                    </div>
                    <h2><a href="#">INSIDE ZARA</a></h2>
                    <p>Lorem ipsum dolor sit <br>
                        consectetur adipisicing </p>
                    <a href="#" class="read">Read More</a>
                </article>
                <article class="no">
                    <div class="pic">
                        <img src="img/main3.png" alt="잡지3">
                    </div>
                    <h2><a href="#">INSIDE ZARA</a></h2>
                    <p>Lorem ipsum dolor sit<br>
                        consectetur adipisicing </p>
                    <a href="#" class="read">Read More</a>
                </article> */}
				</div>
			</div>
		</section>
	);
}

export default Pics;
