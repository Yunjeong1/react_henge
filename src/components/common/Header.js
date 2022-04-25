import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Menu from './Menu';

const path = process.env.PUBLIC_URL;

function Header(props) {
	const active = { color: '#999' };
	return (
		<>
			<header id='header' className={props.type}>
				<div className='inner'>
					<h1>
						<NavLink exact to='/'>
							<img src={props.logoSrc} alt='logo' />
						</NavLink>
					</h1>

					<nav className='menuWeb'>
						<ul id='gnbWeb'>
							<div className='li_left'>
								<li>
									<NavLink to='/gallery' activeStyle={active}>
										Gallery
									</NavLink>
								</li>
								<li>
									<NavLink to='/youtube' activeStyle={active}>
										Youtube
									</NavLink>
								</li>
								<li>
									<NavLink to='/contact' activeStyle={active}>
										Contact
									</NavLink>
								</li>
							</div>
							<div className='li_right'>
								<li>
									<NavLink to='/community' activeStyle={active}>
										Community
									</NavLink>
								</li>
								<li>
									<NavLink to='/join' activeStyle={active}>
										Join Us
									</NavLink>
								</li>
							</div>
						</ul>
					</nav>

					<FontAwesomeIcon icon={faBars} />
				</div>
			</header>
		</>
	);
}

export default Header;
