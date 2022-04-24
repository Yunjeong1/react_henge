import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faXmark } from '@fortawesome/free-solid-svg-icons';
import Popup from '../common/Popup';

function Vids() {
	const vidData = useSelector((state) => state.youtubeReducer.youtube);
	const pop = useRef(null);
	const [index, setIndex] = useState(0);

	return (
		<>
			<section id='vids' className='myScroll'>
				<div className='inner'>
					<div className='tit'>
						<h1>Recent Youtube</h1>
						<NavLink to='/youtube' className='btn'>
							view all
						</NavLink>
					</div>

					<ul className='vidList'>
						{vidData.map((vid, idx) => {
							if (idx < 2)
								return (
									<li
										key={idx}
										onClick={() => {
											setIndex(idx);
											pop.current.open();
										}}>
										<img src={vid.snippet.thumbnails.maxres.url} />
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
