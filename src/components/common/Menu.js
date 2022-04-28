import { useState, forwardRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Menu = forwardRef((props, ref) => {
	const [open, setOpen] = useState(false);
	const active = { color: '#aaa' };

	useImperativeHandle(ref, () => {
		return {
			open: () => setOpen(true),
			close: () => setOpen(false),
		};
	});

	return (
		<AnimatePresence>
			{open && (
				<>
					<motion.nav
						className='nav_m'
						initial={{ x: -280, transition: { duration: 0.5 } }}
						animate={{ x: 0, transition: { duration: 0.5 } }}
						exit={{ x: -280, transition: { duration: 0.5 } }}>
						<h1>
							<NavLink exact to='/' activeStyle={active}>
								<img src={props.logoSrc} />
							</NavLink>
						</h1>
						<ul
							id='gnb'
							onClick={() => {
								setOpen(false);
								props.setOpened(!props.opened);
							}}>
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
					</motion.nav>
				</>
			)}
		</AnimatePresence>
	);
});

export default Menu;
