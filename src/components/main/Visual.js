import { useState, useRef } from 'react';
import Anim from '../../class/anim';

const path = process.env.PUBLIC_URL;

function Visual() {
	const panel = useRef(null);
	const [enableClick, setEnableClick] = useState(true);

	const prevBtn = () => {
		setEnableClick(false);
		const lastEl = panel.current.lastElementChild;
		panel.current.style.marginLeft = '-100%';
		new Anim(panel.current, {
			prop: 'margin-left',
			value: '0%',
			duration: 1000,
			callback: () => {
				panel.current.prepend(lastEl);
				panel.current.style.marginLeft = '-100%';
				setEnableClick(true);
			},
		});
	};

	const nextBtn = () => {
		setEnableClick(false);
		const firstEl = panel.current.firstElementChild;
		panel.current.style.marginLeft = '-100%';
		new Anim(panel.current, {
			prop: 'margin-left',
			value: '-200%',
			duration: 1000,
			callback: () => {
				panel.current.append(firstEl);
				panel.current.style.marginLeft = '-100%';
				setEnableClick(true);
			},
		});
	};
	/*
	const getItems = () => {
		const frame = panel.current;
		const frame_items = frame.children;
		const items = Array.from(frame_items);
		const len = items.length;

		const current_item = frame.querySelector('on');
		const current_idx = items.indexOf(current_item);
		return [frame, frame_items, len, current_item, current_idx];
	};

	const moveUp = () => {
		const [frame, frame_items, len, current_item, current_idx] = getItems();
		let next_idx = null;
		current_idx !== len - 1 ? (next_idx = current_idx + 1) : (next_idx = 0);

		current_item.classList.remove('on');
		current_item.classList.add('up');
		frame_items[next_idx].classList.add('down');

		setTimeout(() => {
			frame_items[next_idx].classList.remove('on');
			frame_items[next_idx].classList.add('on');
			frame.querySelector('.up').classList.remove('up');
		}, 500);
	};
	*/

	return (
		<section id='visual' className='myScroll'>
			<div className='inner inner_1'>
				<div className='wrap wrap_1'>
					<article>
						<ul className='panel'>
							<li>
								<h2>
									<span>T</span>HE <span>C</span>LASHING
									<br />
									<span>C</span>OLOURS <span>O</span>F<br />
									<span>K</span>INDNESS AND
									<br />
									<span>F</span>ASHION
								</h2>
								<p>Written by Pak Lun Chiu</p>
							</li>
						</ul>
					</article>
				</div>

				<div
					className='btnPrev'
					onClick={() => {
						enableClick && prevBtn();
					}}>
					<span>Prev</span>
				</div>
				<div
					className='btnNext'
					onClick={() => {
						enableClick && nextBtn();
					}}>
					<span>Next</span>
				</div>
			</div>

			<div className='inner inner_2'>
				<div className='wrap wrap_2'>
					<article>
						<div className='slider'>
							<ul className='panel' ref={panel}>
								<li data-index='1'>
									<img src={`${path}/img/slider2.jpg`} />
								</li>
								<li data-index='2'>
									<img src={`${path}/img/slider1.jpg`} />
								</li>
								<li data-index='3'>
									<img src={`${path}/img/slider3.jpg`} alt='visual' />
								</li>
							</ul>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
}

export default Visual;
