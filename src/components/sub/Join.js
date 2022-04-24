import Layout from '../common/Layout';
import { useState, useEffect } from 'react';

function Join() {
	const path = process.env.PUBLIC_URL;
	const initVal = {
		userid: '',
		pwd1: '',
		pwd2: '',
		email: '',
		comments: '',
		gender: null,
		interest: null,
		path: '',
		agree: null,
	};
	const [val, setVal] = useState(initVal);
	const [err, setErr] = useState({});
	const [success, setSuccess] = useState(false);
	const [isSubmit, setIsSubmit] = useState(false);

	const check = (val) => {
		const errs = {};
		const eng = /[a-zA-Z]/;
		const num = /[0-9]/;
		const spc = /[~!@#$%^&*()(_+)]/;

		if (val.userid.length < 5) {
			errs.userid = '아이디를 5글자 이상 입력하세요';
		}
		if (
			val.pwd1.length < 5 ||
			!eng.test(val.pwd1) ||
			!num.test(val.pwd1) ||
			!spc.test(val.pwd1)
		) {
			errs.pwd1 =
				'비밀번호는 5글자 이상, 문자, 숫자, 특수문자를 모두 포함하세요';
		}
		if (val.pwd1 !== val.pwd2 || !val.pwd2) {
			errs.pwd2 = '두개의 비밀번호를 동일하게 입력하세요';
		}
		if (val.email.length < 5 || !/[@]/.test(val.email)) {
			errs.email = '이메일은 5글자이상, @ 포함하여 입력하세요';
		}
		if (val.comments < 10) {
			errs.comments = '남기는 말은 10글자 이상 입력하세요';
		}
		if (!val.gender) {
			errs.gender = '성별을 선택하세요';
		}
		if (!val.interests) {
			errs.interests = '관심사를 한개 이상 선택하세요.';
		}
		if (val.path === '') {
			errs.path = '가입경로를 선택하세요';
		}
		if (!val.agree) {
			errs.agree = '약관에 동의하세요';
		}
		return errs;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setVal({ ...val, [name]: value });
	};

	const handleRadio = (e) => {
		const { name } = e.target;
		const isCheck = e.target.checked;
		setVal({ ...val, [name]: isCheck });
	};

	const handleCheck = (e) => {
		let isCheck = false;
		const { name } = e.target;
		const inputs = e.target.parentElement.querySelectorAll('input');
		inputs.forEach((el) => {
			if (el.checked) isCheck = true;
		});
		setVal({ ...val, [name]: isCheck });
	};

	const handleSelect = (e) => {
		const { name } = e.target;
		const isSelected = e.target.options[e.target.selectedIndex].value;
		setVal({ ...val, [name]: isSelected });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErr(check(val));
	};

	const handleReset = (e) => {
		setVal(initVal);
		setErr({});
	};

	useEffect(() => {
		const len = Object.keys(err).length;
		if (len === 0 && isSubmit) {
			setSuccess(true);
		} else {
			setSuccess(false);
		}
	}, [err]);

	useEffect(() => {
		handleReset();
	}, [success]);

	return (
		<Layout name={'Join Life'} num={'06'}>
			<div className='inner2'>
				{success ? <span>회원가입을 축하합니다!</span> : null}

				<div className='cover'>
					<div className='group1'>
						<img src={`${path}/img/join.jpg`} alt='' />
					</div>
					<div className='group2'>
						<form onSubmit={handleSubmit}>
							<fieldset>
								<legend className='h'>회원가입양식</legend>

								{/* <div className='group group1'>
									<h3>
										<label htmlFor='terms'>1. 약관 동의</label>
									</h3>
									<textarea
										name='terms'
										id='terms'
										cols='30'
										rows='10'
										defaultValue='Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Facere, sequi nihil aliquid itaque rerum, porro mollitia
										incidunt reiciendis perspiciatis et unde, iure maiores
										reprehenderit id fugiat iusto accusantium consequuntur vel
										veniam optio asperiores. Sint, voluptates doloremque eveniet
										consequatur quaerat tenetur et tempore dolores modi iure vel
										officia, fugit facilis nam expedita ad ut ratione. Minima
										laboriosam quam doloribus, neque corporis repudiandae
										necessitatibus cum dolore soluta! Rerum corporis rem
										reiciendis atque neque quibusdam minima praesentium earum,
										beatae maxime, inventore officiis incidunt cumque quisquam
										illo commodi doloremque asperiores tempora ratione
										doloribus. Ea vitae esse laudantium mollitia consequatur
										accusamus accusantium illum eaque voluptatibus suscipit,
										sequi cumque asperiores enim repellat! Consequatur fugiat
										illo impedit? Velit neque reiciendis explicabo provident
										nisi sint aut ape. doloremque asperiores tempora ratione
										doloribus. Ea vitae esse laudantium mollitia consequatur
										accusamus accusantium illum eaque voluptatibus suscipit,
										sequi cumque asperiores enim repellat! Consequatur fugiat
										illo impedit? Velit neque reiciendis explicabo provident
										nisi sint aut ape.'></textarea>
									<div className='agreement'>
										<input
											type='checkbox'
											name='agree'
											id='agree'
											onChange={handleRadio}
										/>
										<label htmlFor='agree'>약관에 동의합니다</label>
										<span className='err'>{err.agree}</span>
									</div>
								</div> */}

								<h3>Get in touch with us</h3>
								<table>
									<caption className='h'>회원정보 입력 양식 테이블</caption>
									<tbody>
										<tr>
											<th scope='row'>
												<label htmlFor='userid'>아이디</label>
											</th>
											<td>
												<input
													type='text'
													name='userid'
													id='userid'
													placeholder='아이디를 입력해주세요'
													value={val.userid}
													onChange={handleChange}
												/>
												<span className='err'>{err.userid}</span>
											</td>
										</tr>
										<tr>
											<th scope='row'>
												<label htmlFor='pwd1'>비밀번호</label>
											</th>
											<td>
												<input
													type='password'
													name='pwd1'
													id='pwd1'
													placeholder='비밀번호를 입력해주세요'
													val={val.pwd1}
													onChange={handleChange}
												/>
												<span className='err'>{err.pwd1}</span>
											</td>
										</tr>
										<tr>
											<th scope='row'>
												<label htmlFor='pwd2'>비밀번호 재입력</label>
											</th>
											<td>
												<input
													type='password'
													name='pwd2'
													id='pwd2'
													placeholder='비밀번호를 한번 더 입력해주세요'
													value={val.pwd2}
													onChange={handleChange}
												/>
												<span className='err'>{err.pwd2}</span>
											</td>
										</tr>
										<tr>
											<th scope='row'>
												<label htmlFor='interest'>관심 분야</label>
											</th>
											<td>
												<label htmlFor='women'>
													<input
														type='checkbox'
														name='interest'
														id='women'
														onChange={handleCheck}
													/>
													여성복
												</label>
												<label htmlFor='men'>
													<input
														type='checkbox'
														name='interest'
														id='men'
														onChange={handleCheck}
													/>
													남성복
												</label>
												<label htmlFor='beauty'>
													<input
														type='checkbox'
														name='interest'
														id='beauty'
														onChange={handleCheck}
													/>
													뷰티
												</label>
												{/* <p>관심있는 항목을 선택하세요</p> */}
												<span className='err'>{err.interests}</span>
											</td>
										</tr>
										<tr>
											<th scope='row'>
												<label htmlFor='gender'>성별</label>
											</th>
											<td>
												<label htmlFor='female'>
													<input
														type='radio'
														name='gender'
														id='female'
														onChange={handleRadio}
													/>
													여성
												</label>
												<label htmlFor='male'>
													<input
														type='radio'
														name='gender'
														id='male'
														onChange={handleRadio}
													/>
													남성
												</label>
												{/* <p>성별을 선택하세요</p> */}
												<span className='err'>{err.gender}</span>
											</td>
										</tr>
										<tr>
											<th scope='row'>
												<label htmlFor='email'>이메일</label>
											</th>
											<td>
												<input
													type='text'
													name='email'
													id='email'
													placeholder='이메일 주소를 입력해주세요'
													value={val.email}
													onChange={handleChange}
												/>
												<span className='err'>{err.email}</span>
											</td>
										</tr>
										<tr>
											<th scope='row'>
												<label htmlFor='path'>가입 경로</label>
											</th>
											<td>
												<select name='path' id='path' onChange={handleSelect}>
													<option value=''>가입경로를 선택해주세요</option>
													<option value='internet'>인터넷</option>
													<option value='magazine'>잡지</option>
													<option value='friend'>지인 추천</option>
													<option value='others'>기타</option>
												</select>
												<span className='err'>{err.path}</span>
											</td>
										</tr>
										<tr>
											<th scope='row'>
												<label htmlFor='comments'>고객 의견</label>
											</th>
											<td>
												<textarea
													name='comments'
													id='comments'
													cols='30'
													rows='10'
													placeholder='코멘트를 남겨주세요'
													value={val.comments}
													onChange={handleChange}></textarea>
												<span className='err'>{err.comments}</span>
											</td>
										</tr>
										<tr>
											<th colSpan='2'>
												<input
													type='reset'
													value='CANCEL'
													onClick={handleReset}
												/>
												<input
													type='submit'
													value='SEND'
													onClick={() => {
														setIsSubmit(true);
													}}
												/>
											</th>
										</tr>
									</tbody>
								</table>
							</fieldset>
						</form>
					</div>
				</div>
			</div>

			<div className='inner1'>
				<h2>Our Projects</h2>
				<div className='wrap'>
					<article>
						<img src={`${path}/img/solution1.jpg`} alt='' />
						<div className='text'>
							<h3>Henge design merged</h3>
							<p>Sisma Table by Castagna</p>
							<div className='btn'>view more</div>
						</div>
					</article>
					<article>
						<div className='text'>
							<h3>Henge design merged</h3>
							<p>Sisma Table by Castagna</p>
							<div className='btn'>view more</div>
						</div>
						<img src={`${path}/img/solution2.jpg`} alt='' />
					</article>
					<article>
						<img src={`${path}/img/solution3.jpg`} alt='' />
						<div className='text'>
							<h3>Henge design merged</h3>
							<p>Sisma Table by Castagna</p>
							<div className='btn'>view more</div>
						</div>
					</article>
					<article>
						<div className='text'>
							<h3>Henge design merged</h3>
							<p>Sisma Table by Castagna</p>
							<div className='btn'>view more</div>
						</div>
						<img src={`${path}/img/solution5.jpg`} alt='' />
					</article>
				</div>
			</div>
		</Layout>
	);
}

export default Join;
