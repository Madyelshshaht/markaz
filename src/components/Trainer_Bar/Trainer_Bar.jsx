"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import React from 'react'
import TrainSection from "./TrainSection";
const Trainer_Bar = () => {
    return (
        <div className="" style={{ background: "linear-gradient(270deg, #0F5FA6 50%, #0B96A6 90%)" }}>
            <div className="trainee md:px-0 px-2" >
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    speed={1500}
                    loop={true}
                    breakpoints={{
                        0: { slidesPerView: 2 },
                        600:{slidesPerView: 3},
                        1024: { slidesPerView: 4 },
                    }}
                    className='mb-20'
                >
                    <SwiperSlide >
                        <TrainSection src={"/assets/Trainer/gradution.png"} num={"17000+"} title={"متدرب ومتدرية"} />
                    </SwiperSlide>
                    <SwiperSlide >
                        <TrainSection src={"/assets/Trainer/certification 1.png"} num={"320+"} title={"دورة تم تنفيذها"} />
                    </SwiperSlide>
                    <SwiperSlide >
                        <TrainSection src={"/assets/Trainer/online-test 1.png"} num={"216+"} title={"ساعة معتمدة"} />
                    </SwiperSlide>
                    <SwiperSlide >
                        <TrainSection src={"/assets/Trainer/exam 1.png"} num={"60+"} title={"يوم تدريبي معتمد"} />
                    </SwiperSlide>
                    <SwiperSlide >
                        <TrainSection src={"/assets/Trainer/Capa_1.png"} num={"15+"} title={"دورة معتمدة"} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Trainer_Bar