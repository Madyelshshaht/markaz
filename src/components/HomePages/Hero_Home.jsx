import {
    ArrowRightEndOnRectangleIcon,
    ArrowRightIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const Hero_Home = () => {
    return (
        <>
            <div className="w-full flex md:flex-row-reverse flex-col justify-center items-center gap-2  py-10 px-5">
                <div className="img md:w-1/2 p-5">
                    <img src="/assets/Home/hero.png" alt="hero_img" />
                </div>
                <div className="contnet p-5 md:w-1/2">
                    <h1 className="md:text-5xl text-2xl font-bold  pb-4 ">
                        إختيارك  <span className="bg-gradient-to-r from-gray-500 to-blue-900 text-transparent bg-clip-text">
                            الذكي
                        </span>
                    </h1>
                    <h1 className="md:text-5xl text-2xl font-bold">
                        من أجل مستقبلك <span className="bg-gradient-to-r from-gray-500 to-blue-900  text-transparent bg-clip-text">
                            المهني
                        </span>
                    </h1>
                    <br />
                    <p className="md:text-2xl text-md">
                        كل الدورات التي تحتاجها لكي تبدأ مسارك المهني في منصة واحدة بين يديك
                        كل الدورات التي تحتاجها لكي تبدأ مسارك المهني في منصة واحدة بين يديك
                        كل الدورات التي تحتاجها لكي تبدأ مسارك المهني في منصة واحدة بين يديك
                    </p>

                    <div className="btn ">
                        <button className="mt-7 px-8 py-3 rounded-full shadow-lg text-white bg-gradient-to-r from-gray-500 to-blue-900  hover:opacity-90 transition cursor-pointer">  استكشف الدورات </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero_Home;
