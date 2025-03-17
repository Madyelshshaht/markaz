import {
    ArrowRightEndOnRectangleIcon,
    ArrowRightIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const Aims = () => {
    return (
        <>
            <div className="w-full flex md:flex-row-reverse flex-col justify-center items-center gap-5  py-10 md:px-20 px-10" id="aims">
                <div className="img md:w-1/2 flex justify-center p-5">
                    <img src="/assets/why/Aims.png" alt="hero_img" />
                </div>
                <div className="contnet p-5 md:w-1/2">
                    <h1 className="md:text-5xl text-2xl font-bold  pb-4 ">
                        أهدافنا
                    </h1>
                    <ul className="flex flex-col gap-5">
                        <li className="flex items-center gap-4">
                            <img src="/assets/Why/Goal Icon.png" alt="Goal" />
                            <span className="md:text-xl">تقديم تجربة تدريبية متميزة</span>
                        </li>
                        <li className="flex  items-center gap-4">
                            <img src="/assets/Why/Goal Icon.png" alt="Goal" />
                            <span className="md:text-xl">تنمية المهارات المهنية للمتدربين</span>
                        </li>
                        <li className="flex  items-center gap-4">
                            <img src="/assets/Why/Goal Icon.png" alt="Goal" />
                            <span className="md:text-xl">تحقيق أقصي درجات الإستفادة العلمية والمهنية لعملائنا</span>
                        </li>
                        <li className="flex  items-center gap-4">
                            <img src="/assets/Why/Goal Icon.png" alt="Goal" />
                            <span className="md:text-xl">تحقيق أعلي معايير الجودة في جميع الخدمات التدريبية</span>
                        </li>
                        <li className="flex  items-center gap-4">
                            <img src="/assets/Why/Goal Icon.png" alt="Goal" />
                            <span className="md:text-xl">توفير البرامج التدريبية التي تناسب جميع التخصصات الإدارية</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Aims;
