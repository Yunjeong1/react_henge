import Header from '../common/Header';
import Visual from './Visual';
import News from './News';
import Vids from './Vids';
import Pics from './Pics';
import Slider from './Slider';
import Collection from './Collection';
import View from './View';
import Btns from './Btns';
import Anime from '../../class/anim';
import { useRef, useEffect, useState } from 'react';

const path = process.env.PUBLIC_URL;

function Main() {
	const main = useRef(null);
	const pos = useRef([]);
	const [index, setIndex] = useState(0);

	const getPos = () => {
		const secs = main.current.querySelectorAll('.myScroll');
		pos.current = [];
		for (const sec of secs) pos.current.push(sec.offsetTop);
	};

	const activation = () => {
		const base = -200;
		let scroll = window.scrollY;
		const btns = main.current.querySelectorAll('.btns li');

		pos.current.map((el, idx) => {
			if (scroll >= el + base) {
				for (const btn of btns) btn.classList.remove('on');
				btns[idx].classList.add('on');
			}
		});
	};

	useEffect(() => {
		getPos();

		window.addEventListener('resize', getPos);
		window.addEventListener('scroll', activation);

		return window.removeEventListener('resize', getPos);
	}, []);

	useEffect(() => {
		new Anime(window, {
			prop: 'scroll',
			value: pos.current[index],
			duration: 500,
		});
	}, [index]);

	return (
		<main ref={main} id='main'>
			<Visual />
			{/* <Collection /> */}
			<News />
			<View />
			<Vids />
			{/* <Pics /> */}
			<Slider />
			<Btns idx={setIndex} />
		</main>
	);
}

export default Main;
