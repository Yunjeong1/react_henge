import Layout from '../common/Layout';
import React, { useRef, useEffect, useState } from 'react';

function Contact() {
	//email
	const initVal = {
		username: '',
		lastname: '',
		subject: '',
		comments: '',
	};
	const [val, setVal] = useState(initVal);
	const [err, setErr] = useState({});
	const [success, setSuccess] = useState(false);
	const [isSubmit, setIsSubmit] = useState(false);

	const check = (val) => {
		const errs = {};
		if (val.username.length < 2) {
			errs.username = '2글자 이상 입력하세요';
		}
		if (val.lastname.length < 2) {
			errs.lastname = '1글자 이상 입력하세요';
		}
		if (val.subject.length < 5) {
			errs.subject = '5글자 이상 입력하세요';
		}
		if (val.comments.length < 5) {
			errs.comments = '5글자 이상 입력하세요';
		}

		return errs;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setVal({ ...val, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErr(check(val));
	};

	const handleReset = () => {
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

	//kakao map
	const path = process.env.PUBLIC_URL;
	const container = useRef(null);
	const { kakao } = window;
	//위치버튼 활성화
	const branch = useRef(null);

	const info = [
		{
			title: 'SONGPA, KOREA',
			address: 'PADOVA',
			city: 'VIA DAVILA, 15-19',
			post: '35137',
			email: 'Email: info@arredodalpozzo.it',
			latlng: new kakao.maps.LatLng(37.51199745517824, 127.09855357200387),
			imgSrc: `${path}/img/pin.png`,
			imgSize: new kakao.maps.Size(40, 64),
			imgPos: { offset: new kakao.maps.Point(20, 64) },
		},

		{
			title: 'MYEONGDONG, KOREA',
			address: 'VICENZA ',
			city: 'VIA MAZZINI, 24',
			post: '36040',
			email: 'Email: info@arredodalpozzo.it',
			latlng: new kakao.maps.LatLng(37.56250041835499, 126.98516157408622),
			imgSrc: `${path}/img/pin.png`,
			imgSize: new kakao.maps.Size(40, 64),
			imgPos: { offset: new kakao.maps.Point(20, 64) },
		},
	];

	const [map, setMap] = useState(null);
	const [mapInfo] = useState(info);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		container.current.innerHTML = '';

		const options = {
			center: mapInfo[index].latlng,
			level: 3,
		};
		const map = new kakao.maps.Map(container.current, options);

		const mapInstance = new kakao.maps.Map(container.current, options);

		mapInstance.setZoomable(false);

		const markerPosition = mapInfo[index].latlng;
		const imgSrc = mapInfo[index].imgSrc;
		const imgSize = mapInfo[index].imgSize;
		const imgPos = mapInfo[index].imgPos;
		const markerImg = new kakao.maps.MarkerImage(imgSrc, imgSize, imgPos);
		const marker = new kakao.maps.Marker({
			position: markerPosition,
			image: markerImg,
		});

		marker.setMap(mapInstance);

		const mapTypeControl = new kakao.maps.MapTypeControl();
		mapInstance.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

		const zoomControl = new kakao.maps.ZoomControl();
		mapInstance.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

		const mapInit = () => {
			mapInstance.setCenter(mapInfo[index].latlng);
		};
		setMap(mapInstance);

		//위치버튼 활성화
		const articles = branch.current.querySelectorAll('article');
		for (const article of articles) {
			article.classList.remove('on');
			articles[index].classList.add('on');
		}

		window.addEventListener('resize', mapInit);

		return () => {
			window.removeEventListener('resize', mapInit);
		};
	}, [index]);

	return (
		<Layout name={'Contact'} num={'03'}>
			{/* {success ? <h3>전송이 성공적으로 완료되었습니다!</h3> : null}
			<div className='inner inner1'>
				<h2>
					Email us,
					<br />
					we would love to
					<br />
					hear from you
				</h2>

				<form className='touch' onSubmit={handleSubmit}>
					<fieldset>
						<legend className='h'>Get in touch 등록 양식</legend>
						<table>
							<caption className='h'>Get in touch 입력 테이블</caption>
							<tbody>
								<tr>
									<th scope='row'>
										<label htmlFor='username'>Name</label>
									</th>
									<td>
										<input
											type='text'
											name='username'
											id='username'
											placeholder='Name'
											value={val.username}
											onChange={handleChange}
										/>
										<span>{err.username}</span>
									</td>
									<th scope='row'>
										<label htmlFor='lastname' className='lastname'>
											Last name
										</label>
									</th>
									<td>
										<input
											type='text'
											name='lastname'
											id='lastname'
											placeholder='Last name'
											value={val.lastname}
											onChange={handleChange}
										/>
										<span className='two'>{err.lastname}</span>
									</td>
								</tr>
								<tr>
									<th scope='row'>
										<label htmlFor='subject'>Subject</label>
									</th>
									<td colSpan='3'>
										<input
											type='text'
											name='subject'
											id='subject'
											placeholder='Questions'
											value={val.subject}
											onChange={handleChange}
										/>
										<span>{err.subject}</span>
									</td>
								</tr>
								<tr>
									<th scope='row' valign='top'>
										<label htmlFor='message'>Message</label>
									</th>
									<td colSpan='3'>
										<textarea
											name='comments'
											id='comments'
											cols='30'
											rows='10'
											placeholder='Write comments...'
											value={val.comments}
											onChange={handleChange}></textarea>
										<span className='four'>{err.comments}</span>
									</td>
								</tr>
								<tr>
									<th>
										<input
											type='submit'
											value='Send'
											onClick={() => setIsSubmit(true)}
										/>
									</th>
								</tr>
							</tbody>
						</table>
					</fieldset>
				</form>
			</div> */}

			<div className='inner inner2'>
				<div id='map' ref={container}></div>
				<div className='branch' ref={branch}>
					{mapInfo.map((info, idx) => {
						return (
							<article
								key={idx}
								onClick={() => {
									setIndex(idx);
								}}>
								<div className='info'>
									<h3>{info.title}</h3>
									<div className='add'>
										<p>{info.address}</p>
										<p>{info.city}</p>
										<p>{info.post}</p>
										<p>{info.email}</p>
									</div>
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</Layout>
	);
}

export default Contact;
