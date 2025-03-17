"use client";

import { ChevronLeft, ChevronRight, Calendar, Clock } from "lucide-react";

import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const courses = [
    {
        title: "دورة إدارة الموارد البشرية",
        hours: "16 ساعة تدريبية",
        days: "4 أيام تدريبية",
        image: "/assets/Moatameeden/Course Image.png",
    },
    {
        title: "دورة إدارة الموارد البشرية",
        hours: "16 ساعة تدريبية",
        days: "4 أيام تدريبية",
        image: "/assets/Moatameeden/Course Image.png",
    },
    {
        title: "دورة إدارة الموارد البشرية",
        hours: "16 ساعة تدريبية",
        days: "4 أيام تدريبية",
        image: "/assets/Moatameeden/Course Image.png",
    },
    {
        title: "دورة إدارة الموارد البشرية",
        hours: "16 ساعة تدريبية",
        days: "4 أيام تدريبية",
        image: "/assets/Moatameeden/Course Image.png",
    },
];

const Courses = () => {





    return (
        <div className="py-10 mx-5 text-right" id="courses">
            <div className=" m-auto">
                <div className="head flex justify-between items-center">
                    <h2 className="md:text-4xl text-2xl font-bold mb-6">
                        الدورات التدريبية
                    </h2>

                    {/* <div className="flex justify-between items-center gap-2 mb-4 relative">
                        <button className=" p-2 bg-gradient-to-r from-gray-500 to-blue-900 hover:bg-cyan-500 text-white cursor-pointer rounded-full  ">
                            <ChevronRight size={24} />
                        </button>
                        <button className=" p-2 bg-gradient-to-r from-gray-500 to-blue-900 hover:bg-cyan-500  text-white cursor-pointer rounded-full  ">
                            <ChevronLeft size={24} />
                        </button>
                    </div> */}
                </div>

                <Swiper
                    className="mySwiper "
                    modules={[Autoplay]}
                    spaceBetween={30}
                    autoplay={{ delay: 2000, disableOnInteraction: false , reverseDirection: true,}}
                    speed={2000}
                    loop={true}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        500: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {courses.map((course, index) => (
                        <SwiperSlide>
                            <div
                                key={index}
                                className="bg-white rounded-lg hover:shadow-md py-4 px-5"
                            >
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                                <div className="mt-4">
                                    <div className="flex items-center justify-evenly gap-5 text-gray-600 text-sm">
                                        <div className="flex items-center justify-center gap-2">
                                            <Clock size={16} />
                                            <span>{course.hours}</span>
                                        </div>
                                        <div className="flex items-center justify-center gap-2">
                                            <Calendar size={16} />
                                            <span>{course.days}</span>
                                        </div>
                                    </div>

                                    <h3 className="lg:text-3xl md:text-2xl sm:text-lg text-center font-semibold text-[#0E6FA5] mt-2">
                                        {course.title}
                                    </h3>
                                    <button className="mt-4 w-full bg-[#B4D8F0] text-[#003666] py-2 rounded-3xl flex items-center justify-center gap-2 font-medium">
                                        سجل الآن <ChevronLeft size={16} />
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Courses;
