import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const path = process.env.PUBLIC_URL;

function Slider(props) {
	const scrolled = props.scrolled;
	const start = props.posStart;
	const base = 500;
	const position = scrolled - start + base;

	return (
		<section
			id='slider'
			className='myScroll'
			style={{ opacity: position / 15, transition: '0.5s' }}>
			<h1>HENGE LIFE</h1>
			<Swiper
				spaceBetween={200}
				slidesPerView={3}
				centeredSlides={true}
				loop={true}
				scrollbar={{
					hide: false,
				}}
				navigation={true}
				pagination={{
					clickable: true,
				}}
				modules={[Navigation, Pagination, Scrollbar]}
				breakpoints={{
					0: {
						slidesPerView: 1,
						spaceBetween: 0,
					},
					540: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					1180: {
						slidesPerView: 3,
						spaceBetween: 200,
					},
				}}>
				<SwiperSlide>
					<img src={`${path}/img/solution1.jpg`} alt='pic1' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={`${path}/img/solution2.jpg`} alt='pic2' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={`${path}/img/solution3.jpg`} alt='pic3' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={`${path}/img/solution5.jpg`} alt='pic4' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={`${path}/img/solution8.jpg`} alt='pic5' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={`${path}/img/solution4.jpg`} alt='pic8' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={`${path}/img/solution9.jpg`} alt='pic9' />
				</SwiperSlide>
			</Swiper>
		</section>
	);
}

export default Slider;
