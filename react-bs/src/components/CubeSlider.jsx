import React from 'react'
import { useRef,useState } from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import {EffectCube , Pagination, Autoplay} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import image2 from '../images/img-2.jpg'
import image6 from '../images/img-6.jpg'
import image7 from '../images/img-7.jpg'
const CubeSlider = () => {
  return (
    <div className='container'>
        <div className="row align-items-center">
            <div className='col-md-6'>
                <div className="swiper-container">
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
                        modules={[EffectCube, Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={image2} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={image6} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={image7} alt="" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <div className='col-md-6'>
                <div className='about-us'>
                    <h1>HN Drone Photography</h1><br />
                    <h3>Inasfa reprehenderit in voluptate velit esse cillum reeut cupidatatfug nulla pariatur.</h3><br />
                    <p>Aute irure dolor inasfa reprehenderit in voluptate velit esse cillum reeut cupidatatfug nulla pariatur. Excepteur sintxsdfas occaecat.</p>
                </div>
            </div>
        </div>
    </div>

  )
}

export default CubeSlider