// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Lazy } from 'swiper';
import styles from "./SlideShow.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import banner2 from "../images/banner2.jpg"
import banner3 from "../images/banner3.jpg"
import banner4 from "../images/banner4.jpg"
import banner5 from "../images/banner5.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SlideShow= () => {
  return (
    <div className={styles.container}>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay,]}
      spaceBetween={0}
      slidesPerView={1}
      speed={800}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img width="100%" height="400px" src={banner2} alt="kk"/></SwiperSlide>
      <SwiperSlide><img width="100%" height="400px" src={banner3} alt="kk"/></SwiperSlide>
      <SwiperSlide><img width="100%" height="400px" src={banner4} alt="kk"/></SwiperSlide>
      <SwiperSlide><img width="100%" height="400px" src={banner5} alt="kk"/></SwiperSlide>
      
    </Swiper>
    </div>
  );
};
export default SlideShow