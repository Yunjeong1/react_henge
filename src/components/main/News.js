import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function News() {
	const getLocalData = () => {
		const data = localStorage.getItem('posts');

		const dummyData = [
			{ title: 'Hello5', content: 'Here comes description in detail.' },
			{ title: 'Hello4', content: 'Here comes description in detail.' },
			{ title: 'Hello3', content: 'Here comes description in detail.' },
			{ title: 'Hello2', content: 'Here comes description in detail.' },
			{ title: 'Hello1', content: 'Here comes description in detail.' },
		];

		if (data) {
			return JSON.parse(data);
		} else {
			return dummyData;
		}
	};

	const [posts] = useState(getLocalData);

	useEffect(() => {
		localStorage.setItem('posts', JSON.stringify(posts));
	}, []);

	return (
		<section id='news' className='myScroll'>
			<div className='inner'>
				<div className='tit'>
					<h1>Recent Posts</h1>
					<div className='inner'></div>
					<NavLink to='/community' className='btn'>
						view all
					</NavLink>
				</div>

				<ul className='showbox'>
					{posts.map((post, idx) => {
						if (idx < 4) {
							return (
								<article key={idx}>
									<span>{`0${idx + 1}`}</span>
									<h2>{post.title}</h2>
									<p>{post.content}</p>
								</article>
							);
						}
					})}
				</ul>
			</div>
		</section>
	);
}

export default News;
