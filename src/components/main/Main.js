import Visual from './Visual';
import News from './News';
import Vids from './Vids';
import Slider from './Slider';
import View from './View';
import Btns from './Btns';
import Product from './Product';
import Anime from '../../class/anim';
import { useRef, useEffect, useState } from 'react';

const path = process.env.PUBLIC_URL;

function Main() {
	const main = useRef(null);
	const pos = useRef([]);
	const [index, setIndex] = useState(0);

	const [scrolled, setScrolled] = useState(0);

	const getPos = () => {
		const secs = main.current.querySelectorAll('.myScroll');
		pos.current = [];
		for (const sec of secs) pos.current.push(sec.offsetTop);
	};

	const activation = () => {
		const base = -200;
		let scroll = window.scrollY;
		setScrolled(scroll);
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

		return () => {
			window.removeEventListener('resize', getPos);
			window.removeEventListener('scroll', activation);
		};
	}, []);

	useEffect(() => {
		new Anime(window, {
			prop: 'scroll',
			value: pos.current[index],
			duration: 500,
		});
	}, [index]);

	useEffect(() => {
		console.log(scrolled);
	}, [scrolled]);

	return (
		<main ref={main} id='main'>
			<Visual scrolled={scrolled} posStart={pos.current[0]} />
			<Product />
			<View scrolled={scrolled} posStart={pos.current[2]} />
			<News scrolled={scrolled} posStart={pos.current[3]} />
			<Vids scrolled={scrolled} posStart={pos.current[4]} />
			<Slider scrolled={scrolled} posStart={pos.current[5]} />
			<Btns idx={setIndex} />
		</main>
	);
}

export default Main;
