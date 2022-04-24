import Layout from '../common/Layout';
import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faXmark } from '@fortawesome/free-solid-svg-icons';
import Popup from '../common/Popup';

function Youtube() {
	const vidData = useSelector((state) => state.youtubeReducer.youtube);

	const pop = useRef(null);

	const [index, setIndex] = useState(0);

	return (
		<>
			<Layout name={'Youtube'} num={'02'}>
				{vidData.map((item, idx) => {
					const date = item.snippet.publishedAt;
					let tit = item.snippet.title;
					if (tit.length > 39) tit = tit.substr(0, 39) + '...';

					return (
						<article
							key={idx}
							onClick={() => {
								setIndex(idx);
								pop.current.open();
							}}>
							<div className='thumb'>
								<div className='crop'>
									<img src={item.snippet.thumbnails.high.url} />
								</div>
								<FontAwesomeIcon icon={faCirclePlay} />
							</div>

							<div className='con'>
								<h2>{tit}</h2>
								<p>{date.split('T')[0]}</p>
							</div>
						</article>
					);
				})}
			</Layout>

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

export default Youtube;
