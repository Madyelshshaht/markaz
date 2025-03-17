"use client";

import { X } from "lucide-react";
import React, { useState } from "react";
import { FaRocket, FaCog, FaCheckCircle, FaFlag, FaCode, FaStar } from "react-icons/fa";

const Timeline = () => {
    const [selectedMilestone, setSelectedMilestone] = useState(null);

    const milestones = [
        {
            title: "التعرف علي الحتياج التدريبي",
            type: "highlight"
        },
        {
            title: "يتم التسجيل والإشتراك من خلال فريق المبيعات",
            type: "highlight"
        },
        {
            title: "الخطة والمتابعه",
            type: "highlight"
        },
        {
            title: "يتم اصدار الشهادة بعد 48 ساعة من نهاية البرنامج التدريبي ويتك استلامها من خلال منصة منار ",
            type: "highlight"
        },
        {
            title: "اصدار الشهادات والتقييم",
            type: "highlight"
        },
    ];

    const getIcon = (iconName) => {
        switch (iconName) {
            case "rocket":
                return <FaRocket />;
            case "gear":
                return <FaCog />;
            case "check":
                return <FaCheckCircle />;
            case "flag":
                return <FaFlag />;
            case "code":
                return <FaCode />;
            default:
                return <FaStar />;
        }
    };

    const Modal = ({ milestone, onClose }) => {
        if (!milestone) return null;

        return (
            <div className="fixed inset-0 bg-black opacity-80 flex items-center justify-center z-50" onClick={onClose}>
                <div className="inset-0 flex justify-center items-center h-auto  rounded-lg p-8 w-1/2 m-auto">
                    <div className="bg-white text-black relative p-5 rounded-2xl w-full z-30 flex justify-between items-center mb-4 " onClick={(e) => e.stopPropagation()}>
                        <h3 className="text-xl font-bold">{milestone.title}</h3>
                        <button
                            onClick={onClose}
                            className="text-black cursor-pointer"
                            aria-label="Close modal"
                        >
                            <X />
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

                {/* Timeline Items */}
                <div className="space-y-8">
                    {milestones.map((milestone, index) => (
                        <div
                            key={index}
                            className={`flex items-center ${index % 2 === 0 ? "flex-row w-" : "flex-row-reverse"} relative`}
                        >
                            {/* Content */}
                            <div
                                className={`md:w-5/12 w-[50%] ${index % 2 === 0 ? "text-right lg:pr-8 " : "text-left lg:pl-8"}`}
                            >
                                <div
                                    className="p-3 rounded-lg text-white text-2xl   cursor-pointer"
                                    onClick={() => setSelectedMilestone(milestone)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyPress={(e) => e.key === "Enter" && setSelectedMilestone(milestone)}
                                >
                                    <h3 className="md:text-lg text-sm font-bold  mb-2 opacity-40 hover:opacity-100 transition-shadow duration-300">{milestone.title}</h3>

                                </div>
                            </div>

                            {/* Icon */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                <div
                                    className={`${milestone.type === "highlight" ? "md:w-12 md:h-12 bg-blue-500" : "w-10 h-10 bg-gray-400"} 
                    rounded-full flex items-center justify-center text-white shadow-lg
                    transition-transform duration-300 hover:scale-110`}
                                >
                                    <span className={milestone.type === "highlight" ? "text-xl" : "text-lg"}>
                                        {getIcon(milestone.icon)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <Modal
                milestone={selectedMilestone}
                onClose={() => setSelectedMilestone(null)}
            />
        </div>
    );
};

export default Timeline;