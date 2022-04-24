import { NavLink } from 'react-router-dom';

const path = process.env.PUBLIC_URL;

function View() {
	return (
		<section id='view' className='myScroll'>
			<div className='inner'>
				<div className='wrap wrap1'>
					<article className='group group1'>
						<span>Style Inspiration</span>
						<h1>UNDERSTANDING STYLE</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Consequatur animi facere magni repellendus aut corrupti labore,
							quae itaque quot ut facilis beatae voluptates optio molestiae
							atque ea a voluptatemre nam natus quasi enim expedita praesentium
							est? Labore culpa delen iti odit itaque perferendis
						</p>
						<NavLink to='/contact' className='btnOpen'>
							Contact Us
						</NavLink>
					</article>
					<article>
						<div className='pic pic1'>
							<img src={`${path}/img/news1.jpg`} />
						</div>
					</article>
				</div>

				<div className='wrap wrap2'>
					<article>
						<div className='pic pic2'>
							<img src={`${path}/img/news2.jpg`} alt='model 2' />
						</div>
					</article>
					<article className='group group2'>
						<span>Style Inspiration</span>
						<h1>UNDERSTANDING STYLE</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Consequatur animi facere magni repellendus aut corrupti labore,
							quae itaque quot ut facilis beatae voluptates optio molestiae
							atque ea a voluptatemre nam natus quasi enim expedita praesentium
							est? Labore culpa delen iti odit itaque perferendis
						</p>

						<NavLink to='/join' className='btnOpen'>
							Join Us
						</NavLink>
					</article>
				</div>
			</div>
		</section>
	);
}

export default View;
