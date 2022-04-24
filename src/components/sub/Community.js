import Layout from '../common/Layout';
import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faAngleDoubleLeft,
	faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';

function Community() {
	//members
	const path = process.env.PUBLIC_URL;
	const members = useSelector((state) => state.memberReducer.members);

	//board
	const input = useRef(null);
	const textarea = useRef(null);
	const editInput = useRef(null);
	const editTextarea = useRef(null);

	const getLocalData = () => {
		let data = localStorage.getItem('posts');
		data = JSON.parse(data);

		return data;
	};

	const [posts, setPosts] = useState(getLocalData);

	const createPost = () => {
		const inputVal = input.current.value.trim();
		const textareaVal = textarea.current.value.trim();

		if (!inputVal || !textareaVal) {
			alert('제목과 본문을 모두 입력하세요');
			return;
		}

		setPosts([{ title: inputVal, content: textareaVal }, ...posts]);

		resetPost();
	};

	const deletePost = (index) => {
		setPosts(posts.filter((_, idx) => idx !== index));
	};

	const resetPost = () => {
		input.current.value = '';
		textarea.current.value = '';
	};

	const updatePost = (index) => {
		const inputVal = editInput.current.value.trim();
		const textareaVal = editTextarea.current.value.trim();

		if (!inputVal || !textareaVal) {
			alert('제목과 본문을 모두 입력하세요');
			return;
		}
		setPosts(
			posts.map((post, idx) => {
				if (idx === index) {
					post.title = editInput.current.value;
					post.content = editTextarea.current.value;
					post.enableUpdate = false;
				}
				return post;
			})
		);
	};

	const enableUpdate = (index) => {
		setPosts(
			posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = true;
				return post;
			})
		);
	};

	const disableUpdate = (index) => {
		setPosts(
			posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = false;
				return post;
			})
		);
	};

	useEffect(() => {
		localStorage.setItem('posts', JSON.stringify(posts));
	}, [posts]);

	return (
		<Layout name={'Community'} num={'05'}>
			<div className='inner inner1'>
				<div className='cover'>
					<div className='inputBox'>
						<input
							type='text'
							placeholder='제목을 입력하세요'
							ref={input}
							className='tit'
						/>
						<br />
						<textarea
							placeholder='본문을 입력하세요'
							ref={textarea}
							className='cont'></textarea>
						<br />
						<div className='btns'>
							<button onClick={resetPost}>취소</button>
							<button onClick={createPost}>저장</button>
						</div>
					</div>

					<div className='showBox'>
						{posts.map((post, idx) => {
							return (
								<article key={idx}>
									{post.enableUpdate ? (
										<>
											<input
												type='text'
												defaultValue={post.title}
												ref={editInput}
												className='showTit'
											/>
											<br />
											<textarea
												defaultValue={post.content}
												ref={editTextarea}
												className='showCont'></textarea>

											<div className='btns btns1'>
												<button onClick={() => disableUpdate(idx)}>취소</button>
												<button onClick={() => updatePost(idx)}>저장</button>
											</div>
										</>
									) : (
										<>
											<h3>{post.title}</h3>
											<p>{post.content}</p>
											<div className='btns'>
												<button onClick={() => enableUpdate(idx)}>수정</button>
												<button onClick={() => deletePost(idx)}>삭제</button>
											</div>
										</>
									)}
								</article>
							);
						})}
					</div>
				</div>

				<div className='pagination'>
					<div className='prev'>
						<FontAwesomeIcon icon={faAngleDoubleLeft} />
					</div>
					<span className='numbers'>
						<a href='#'>1</a>
						<a href='#'>2</a>
						<a href='#'>3</a>
						<a href='#'>4</a>
						<a href='#'>5</a>
					</span>
					<div className='next'>
						<FontAwesomeIcon icon={faAngleDoubleRight} />
					</div>
				</div>
			</div>

			<div className='inner inner2'>
				<h2>WHO WE ARE</h2>
				<div className='wrap'>
					{members.map((member, idx) => {
						return (
							<article key={idx}>
								<div className='text'>
									<h4>{member.name}</h4>
									<h5>{member.position}</h5>
								</div>
								<img src={`${path}/img/${member.pic}`} alt={`member ${idx}`} />
							</article>
						);
					})}
				</div>
			</div>
		</Layout>
	);
}

export default Community;
