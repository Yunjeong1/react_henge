import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faInstagram,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const path = process.env.PUBLIC_URL;

function Footer(props) {
	return (
		<>
			<footer id='footer' className={props.type}>
				<div className='inner'>
					<h1>
						<NavLink exact to='/'>
							<img src={`${path}/img/logo.png`} alt='logo' />
						</NavLink>
					</h1>

					<ul>
						<li>
							<FontAwesomeIcon icon={faFacebook} />
						</li>
						<li>
							<FontAwesomeIcon icon={faInstagram} />
						</li>
						<li>
							<FontAwesomeIcon icon={faTwitter} />
						</li>
					</ul>

					<address>
						Address: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						qua 0504054
						<br />
						TEL : +82-2-332-1233
						<br />
						FAX : +82-2-332-2223
					</address>
					<p>Copyright &copy; 2022 ZARA All Right Reserved.</p>
				</div>
			</footer>
		</>
	);
}

export default Footer;
