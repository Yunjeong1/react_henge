import Layout from '../common/Layout';
import React from 'react';

function New() {
	const path = process.env.PUBLIC_URL;
	return (
		<Layout name={'New'} num={'04'}>
			<div className='inner'>
				<ul>
					<li className='on'>
						<a href='*'>ALL</a>
					</li>
					<li>
						<a href='.outer'>Outerwear</a>
					</li>
					<li>
						<a href='.tops'>Tops</a>
					</li>
					<li>
						<a href='.trousers'>Trousers</a>
					</li>
					<li>
						<a href='.dresses'>Dresses</a>
					</li>
					<li className='no'>
						<a href='.acc'>Acc</a>
					</li>
				</ul>
				<div className='wrap'>
					<article className='outer'>
						<img src={`${path}/img/out1-1.jpg`} alt='' />
						<img src={`${path}/img/out1-2.jpg`} alt='' />
						<div className='txt'>
							<h2>웨이스티드 다운 재킷</h2>
							<p>275,000원</p>
						</div>
					</article>
					<article className='outer'>
						<img src={`${path}/img/out3-1.jpg`} alt='' />
						<img src={`${path}/img/out3-2.jpg`} alt='' />
						<div className='txt'>
							<h2>코튼 리넨 코트</h2>
							<p>220,000원</p>
						</div>
					</article>
					<article className='outer'>
						<img src={`${path}/img/out4-1.jpg`} alt='' />
						<img src={`${path}/img/out4-2.jpg`} alt='' />
						<div className='txt'>
							<h2>리넨 코튼 트렌치코트</h2>
							<p>240,000원</p>
						</div>
					</article>
					<article className='tops'>
						<img src={`${path}/img/top1-1.jpg`} alt='' />
						<img src={`${path}/img/top1-2.jpg`} alt='' />
						<div className='txt'>
							<h2>헤비웨이트 티셔츠</h2>
							<p>60,000원</p>
						</div>
					</article>
					<article className='tops'>
						<img src={`${path}/img/top4-1.jpg`} alt='' />
						<img src={`${path}/img/top4-2.jpg`} alt='' />
						<div className='txt'>
							<h2>소프트 오버사이즈 스웻셔츠</h2>
							<p>69,000원</p>
						</div>
					</article>
					<article className='tops'>
						<img src={`${path}/img/top7-1.jpg`} alt='' />
						<img src={`${path}/img/top7-2.jpg`} alt='' />
						<div className='txt'>
							<h2>리브드 슬리브리스 탑</h2>
							<p>25,000원</p>
						</div>
					</article>
					<article className='trousers'>
						<img src={`${path}/img/trou1-1.jpg`} alt='' />
						<img src={`${path}/img/trou1-2.jpg`} alt='' />
						<div className='txt'>
							<h2>커브드 크롭트 논스트레치 진</h2>
							<p>89,000원</p>
						</div>
					</article>
					<article className='trousers'>
						<img src={`${path}/img/trou2-1.jpg`} alt='' />
						<img src={`${path}/img/trou2-2.jpg`} alt='' />
						<div className='txt'>
							<h2>스트레이트 논스트레치 진</h2>
							<p>100,000원</p>
						</div>
					</article>
					<article className='trousers'>
						<img src={`${path}/img/trou3-1.jpg`} alt='' />
						<img src={`${path}/img/trou3-2.jpg`} alt='' />
						<div className='txt'>
							<h2>우븐 디테일 스웨트 팬츠</h2>
							<p>89,000원</p>
						</div>
					</article>
					<article className='dresses'>
						<img src={`${path}/img/dress1-1.jpg`} alt='' />
						<img src={`${path}/img/dress1-2.jpg`} alt='' />
						<div className='txt'>
							<h2>A라인 티셔츠 미디 드레스</h2>
							<p>79,000원</p>
						</div>
					</article>
					<article className='dresses'>
						<img src={`${path}/img/dress2-1.jpg`} alt='' />
						<img src={`${path}/img/dress2-2.jpg`} alt='' />
						<div className='txt'>
							<h2>리넨 블렙드 랩 드레스</h2>
							<p>100,000원</p>
						</div>
					</article>
					<article className='dresses'>
						<img src={`${path}/img/dress4-1.jpg`} alt='' />
						<img src={`${path}/img/dress4-2.jpg`} alt='' />
						<div className='txt'>
							<h2>실크 슬립 드레스</h2>
							<p>170,000원</p>
						</div>
					</article>
					<article className='dresses'>
						<img src={`${path}/img/dress5-1.jpg`} alt='' />
						<img src={`${path}/img/dress5-2.jpg`} alt='' />
						<div className='txt'>
							<h2>올 오버 프린티드 드레스</h2>
							<p>140,000원</p>
						</div>
					</article>
					<article className='acc'>
						<img src={`${path}/img/acc1-1.jpg`} alt='' />
						<img src={`${path}/img/acc1-2.jpg`} alt='' />
						<div className='txt'>
							<h2>렉탱글 후프 이어링</h2>
							<p>35,000원</p>
						</div>
					</article>
					<article className='acc'>
						<img src={`${path}/img/acc4-1.jpg`} alt='' />
						<img src={`${path}/img/acc4-2.jpg`} alt='' />
						<div className='txt'>
							<h2>드롭 이어링</h2>
							<p>49,000원</p>
						</div>
					</article>
					<article className='acc'>
						<img src={`${path}/img/acc7-1.jpg`} alt='' />
						<img src={`${path}/img/acc7-2.jpg`} alt='' />
						<div className='txt'>
							<h2>스트로 선 햇</h2>
							<p>69,000원</p>
						</div>
					</article>
				</div>
			</div>
		</Layout>
	);
}

export default New;
