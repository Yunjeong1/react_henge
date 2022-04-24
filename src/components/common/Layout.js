import { useEffect, useRef } from 'react';

function Layout(props) {
	let frame = useRef(null);

	useEffect(() => {
		console.log('레이아웃 컴포넌트 생성');
		frame.current.classList.add('on');

		return () => {
			console.log('레이아웃 컴포넌트 소멸');
		};
	}, []);

	return (
		<section className={`content ${props.name}`} ref={frame}>
			<div className='sub_visual'>
				<div className='text'>
					{/* <div className='small'>
						<p>Our {props.name}</p>
					</div> */}
					<div className='title'>
						<h1>{props.name}</h1>
					</div>
				</div>
			</div>
			<div className='inner'>{props.children}</div>
		</section>
	);
}

export default Layout;
