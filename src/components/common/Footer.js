import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faInstagram,
	faLinkedin,
	faPinterest,
	faSpotify,
	faTwitter,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const path = process.env.PUBLIC_URL;

function Footer(props) {
	return (
		<>
			<footer id='footer' className={props.type}>
				<div className='inner'>
					<h1>
						<NavLink exact to='/'>
							<img src={`${path}/img/henge_logo.png`} alt='logo' />
						</NavLink>
					</h1>

					<address>
						<div className='txt txt1'>Credits</div>
						<div className='txt txt1'>Privacy</div>
						<div className='txt'>P.IVA 04630340265 / Henge 2019</div>
					</address>

					<ul>
						<li>
							<FontAwesomeIcon icon={faInstagram} />
						</li>
						<li>
							<FontAwesomeIcon icon={faFacebook} />
						</li>
						<li>
							<FontAwesomeIcon icon={faYoutube} />
						</li>
						<li>
							<FontAwesomeIcon icon={faPinterest} />
						</li>
						<li>
							<FontAwesomeIcon icon={faLinkedin} />
						</li>
						<li>
							<FontAwesomeIcon icon={faSpotify} />
						</li>
					</ul>
				</div>
			</footer>
		</>
	);
}

export default Footer;
