import React from 'react'
import { useRef,useState } from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import {EffectCube , Pagination, Autoplay} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import image1 from '../images/img-1.jpg'
import image2 from '../images/img-2.jpg'
import image3 from '../images/img-3.jpg'
import image4 from '../images/img-4.jpg'
import image5 from '../images/img-5.jpg'
import image6 from '../images/img-6.jpg'

const CubeSlider = () => {
  return (
    <>
        <Swiper
            effect={'cube'}
            grabCursor={true}
            cubeEffect={{
                shadow: true,
                shadowOffset: 20,
                slideShadows: true,
                shadowScale: 0.94,
            }}
            pagination={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
            modules={[EffectCube,Pagination,Autoplay]}
            className='mySwiper'
        >
            <SwiperSlide>
                <img src={image1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image6} alt="" />
            </SwiperSlide>
        </Swiper>
    </>
  )
}

export default CubeSlider