import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import Popup from '../common/Popup';
import Masonry from 'react-masonry-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

function Gallery() {
	const path = process.env.PUBLIC_URL;
	const wrap = useRef(null);
	const box = useRef(null);
	const pop = useRef(null);
	const masonryOptions = {
		transitionDuration: '0.5s',
	};

	const [items, setItems] = useState([]);
	const [index, setIndex] = useState(0);
	const [loading, setLoading] = useState(true);
	const [enableClick, setEnableClick] = useState(true);
	const [ready, setReady] = useState(false);

	const getFlickr = async (opt) => {
		const base = 'https://www.flickr.com/services/rest/?';
		const method_people = 'flickr.people.getPhotos';
		const method_search = 'flickr.photos.search';
		const username = '195294341@N02';
		const key = '24d03e5e0bfb87d434ce0c70071a6ff9';
		const num = opt.count;
		let url = '';

		if (opt.type === 'fav') {
			url = `${base}method=${method_people}&api_key=${key}&per_page=${num}&format=json&nojsoncallback=1&user_id=${username}`;
		}

		if (opt.type === 'search') {
			url = `${base}method=${method_search}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&tags=${opt.tags}`;
		}

		await axios.get(url).then((json) => {
			if (json.data.photos.photo.length === 0) {
				alert('해당 검색어의 이미지가 없습니다');
				return;
			}
			setItems(json.data.photos.photo);
			setReady(true);
		});
		setTimeout(() => {
			wrap.current.classList.add('on');
			setLoading(false);

			setTimeout(() => {
				setEnableClick(true);
			}, 1000);
		}, 1000);
	};

	const showSearch = () => {
		const result = box.current.value.trim();
		if (!result || result === '') {
			alert('검색어를 입력하세요.');
			return;
		}
		if (enableClick) {
			setEnableClick(false);
			setLoading(true);
			wrap.current.classList.remove('on');
			getFlickr({
				type: 'search',
				count: '30',
				tags: result,
			});
			box.current.value = '';
		}
	};

	useEffect(() => {
		getFlickr({
			type: 'fav',
			count: 25,
		});
	}, []);

	return (
		<>
			<Layout name={'Gallery'} num={'01'}>
				{loading ? (
					<img className='loading' src={path + '/img/loading.gif'} />
				) : null}
				<div id='searchBox'>
					<input
						type='text'
						id='search'
						placeholder='검색어를 입력하세요'
						ref={box}
						onKeyUp={(e) => {
							if (e.key === 'Enter') showSearch();
						}}
						style={{
							border: 'none',
							borderRight: '0px',
							borderTop: '0px',
							boderLeft: '0px',
							boderBottom: '0px',
						}}
					/>
					<span className='btnSearch' onClick={showSearch}>
						<FontAwesomeIcon icon={faMagnifyingGlass} />
					</span>
				</div>
				<div className='wrap' ref={wrap}>
					<Masonry elementType={'div'} options={masonryOptions}>
						{items.map((item, idx) => {
							return (
								<article
									key={idx}
									onClick={() => {
										setIndex(idx);
										pop.current.open();
									}}>
									<div className='inner'>
										<div className='pic'>
											<img
												src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`}
											/>
										</div>
										<div className='text'>
											<p>{item.title}</p>
											<span>by {item.owner}</span>
										</div>
									</div>
								</article>
							);
						})}
					</Masonry>
				</div>
			</Layout>

			<Popup ref={pop}>
				{ready && (
					<img
						src={`https://live.staticflickr.com/${items[index].server}/${items[index].id}_${items[index].secret}_b.jpg`}
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
