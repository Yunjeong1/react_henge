import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../common/Layout';
import Popup from '../common/Popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

function Gallery() {
	const { flickr } = useSelector((state) => state.flickrReducer);
	const dispatch = useDispatch();
	const [opt, setOpt] = useState({ type: 'fav' });
	const input = useRef(null);

	const pop = useRef(null);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		dispatch({ type: 'FLICKR_START', opt });
	}, [opt]);

	/*
	const initGallery = () => {
		setOpt({ type: 'fav' });
	};
	*/

	const searchTag = () => {
		const tag = input.current.value;
		setOpt({ type: 'search', tags: tag });
	};

	return (
		<>
			<Layout name={'Gallery'}>
				<div id='searchBox'>
					<input
						type='text'
						id='search'
						placeholder='검색어를 입력하세요'
						ref={input}
						onKeyUp={(e) => {
							if (e.key === 'Enter') searchTag();
						}}
						style={{
							border: 'none',
							borderRight: '0px',
							borderTop: '0px',
							boderLeft: '0px',
							boderBottom: '0px',
						}}
					/>
					<span className='btnSearch' onClick={searchTag}>
						<FontAwesomeIcon icon={faMagnifyingGlass} />
					</span>
				</div>

				<ul className='pics'>
					{flickr.map((item, idx) => {
						return (
							<li key={idx}>
								<div className='inner'>
									<div
										className='pic'
										onClick={() => {
											setIndex(idx);
											pop.current.open();
										}}>
										<img
											src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`}
										/>
									</div>
									<h2>{item.title}</h2>
								</div>
							</li>
						);
					})}
				</ul>
			</Layout>

			<Popup ref={pop}>
				{flickr.length !== 0 && (
					<img
						src={`https://live.staticflickr.com/${flickr[index].server}/${flickr[index].id}_${flickr[index].secret}_b.jpg`}
					/>
				)}
				<span onClick={() => pop.current.close()}>
					<FontAwesomeIcon icon={faXmark} />
				</span>
			</Popup>
		</>
	);
}

export default Gallery;
