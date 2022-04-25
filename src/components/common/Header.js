import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Menu from './Menu';

function Header(props) {
	const active = { color: '#aaa' };

	const [opened, setOpened] = useState(false);
	const path = process.env.PUBLIC_URL;
	const menu = useRef(null);

	useEffect(() => {
		opened ? menu.current.open() : menu.current.close();
	}, [opened]);

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
						</ul>
					</nav>
					<FontAwesomeIcon
						icon={faBars}
						onClick={() => {
							setOpened(!opened);
						}}
					/>
				</div>
			</header>

			<Menu
				logoSrc={`${path}/img/henge_logo.png`}
				ref={menu}
				opened={opened}
				setOpened={setOpened}
			/>
		</>
	);
}

export default Header;
