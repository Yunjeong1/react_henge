import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as types from './redux/actionsType';

import './scss/style.scss';

//common 컴포넌트
import Header from './components/common/Header';
import Footer from './components/common/Footer';

//main 컴포넌트
import Main from './components/main/Main';

//sub 컴포넌트
import Youtube from './components/sub/Youtube';
import Gallery from './components/sub/Gallery';
import Contact from './components/sub/Contact';
import Join from './components/sub/Join';
import Community from './components/sub/Community';
import { useEffect } from 'react';

const path = process.env.PUBLIC_URL;

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: types.MEMBER.start });
		dispatch({ type: types.YOUTUBE.start });
		dispatch({ type: types.FLICKR.start, opt: { type: 'fav' } });
	}, []);

	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Header type={'main'} logoSrc={`${path}/img/henge_logo.png`} />
					<Main />
				</Route>

				<Route path='/'>
					<Header type={'sub'} logoSrc={`${path}/img/henge_logo.png`} />
				</Route>
			</Switch>

			<Route path='/gallery' component={Gallery} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/contact' component={Contact} />
			<Route path='/community' component={Community} />
			<Route path='/join' component={Join} />

			<Footer />
		</>
	);
}

export default App;
