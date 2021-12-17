import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import 'swiper/swiper-bundle.min.css';
import "./sliders.css";
import SwiperCore, {Autoplay, Navigation} from 'swiper';
import img1 from '../../../Img/33333.jpg'
import img2 from '../../../Img/2.jpg'
import img3 from '../../../Img/222.jpg'
import {Parallax} from "react-parallax";

SwiperCore.use([Navigation, Autoplay]);


export default function Sliders() {

    return (
        <div className='main_slider'>
            <Swiper navigation={true} loop={true} autoplay={{
                "delay": 2500,
                "disableOnInteraction": false
            }}
                    className="mySwiper">
                <SwiperSlide>
                    <Parallax bgImage={img2} strength={500} className="item"></Parallax>
                </SwiperSlide>
                <SwiperSlide>
                    <Parallax bgImage={img3} strength={500} className="item"></Parallax>
                </SwiperSlide>
                <SwiperSlide>
                    <Parallax bgImage={img1} strength={300} className="item"></Parallax>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}