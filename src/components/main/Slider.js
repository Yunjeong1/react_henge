import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const path = process.env.PUBLIC_URL;

function Slider() {
	return (
		<section id='slider' className='myScroll'>
			<h1>Projects that we made</h1>
			<Swiper
				spaceBetween={30}
				slidesPerView={2}
				loop={false}
				scrollbar={{
					hide: false,
				}}
				navigation={true}
				modules={[Scrollbar, Navigation]}
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
						slidesPerView: 4,
						spaceBetween: 30,
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
					<img src={`${path}/img/solution6.jpg`} alt='pic6' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={`${path}/img/solution7.jpg`} alt='pic7' />
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
