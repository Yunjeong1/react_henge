import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faXmark } from '@fortawesome/free-solid-svg-icons';
import Popup from '../common/Popup';

function Vids(props) {
	const vidData = useSelector((state) => state.youtubeReducer.youtube);
	const pop = useRef(null);
	const [index, setIndex] = useState(0);

	//scroll
	const scrolled = props.scrolled;
	const start = props.posStart;
	const base = 100;
	const position = scrolled - start + base;

	return (
		<>
			<section id='vids' className='myScroll'>
				<div className='text'>
					<p
						style={
							position >= 0
								? { transform: `translateX(${-position / 2.5}px)` }
								: null
						}>
						Every morning one of our craftsmen offers his hands and his art to
						make each Henge product unique.
					</p>
				</div>
				<div className='inner'>
					<ul className='vidList'>
						{vidData.map((vid, idx) => {
							if (idx < 4)
								return (
									<li
										key={idx}
										onClick={() => {
											setIndex(idx);
											pop.current.open();
										}}>
										<img
											src={vid.snippet.thumbnails.maxres.url}
											style={{ transform: `translateY(${-position / 13}px)` }}
										/>
										<FontAwesomeIcon icon={faCirclePlay} />
									</li>
								);
						})}
					</ul>
				</div>
			</section>

			<Popup ref={pop}>
				{vidData.length !== 0 && (
					<iframe
						src={
							'https://www.youtube.com/embed/' +
							vidData[index].snippet.resourceId.videoId
						}
						frameBorder='0'></iframe>
				)}
				<span onClick={() => pop.current.close()}>
					<FontAwesomeIcon icon={faXmark} />
				</span>
			</Popup>
		</>
	);
}

export default Vids;
