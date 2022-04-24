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

	useEffect(() => {
		dispatch({ type: 'FLICKR_START', opt });
	}, [opt]);

	const initGallery = () => {
		setOpt({ type: 'fav' });
	};

	const searchTag = () => {
		const tag = input.current.value;
		setOpt({ type: 'search', tags: tag });
	};

	return (
		<>
			<Layout name={'Gallery'}>
				<div className='inputBox'>
					<input type='text' ref={input} />
					<button onClick={searchTag}>검색</button>
				</div>

				<ul>
					{flickr.map((item, idx) => {
						return (
							<li key={idx}>
								<div className='inner'>
									<div className='pic'>
										<img
											src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
										/>
									</div>
									<h2>{item.title}</h2>
								</div>
							</li>
						);
					})}
				</ul>
			</Layout>

			{/* <Popup ref={pop}>
				{ready && (
					<img
						src={`https://live.staticflickr.com/${items[index].server}/${items[index].id}_${items[index].secret}_b.jpg`}
					/>
				)}
				<span onClick={() => pop.current.close()}>
					<FontAwesomeIcon icon={faXmark} />
				</span>
			</Popup> */}
		</>
	);
}

export default Gallery;
