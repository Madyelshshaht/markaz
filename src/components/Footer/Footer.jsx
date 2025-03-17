"use client";

import { FaFacebookF, FaInstagram, FaSnapchatGhost, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#F4FAFD]  text-center py-10">
            {/* الجزء العلوي */}
            <div className="container mx-auto flex flex-col items-center gap-4 pb-6">
                {/* اللوجو */}
                <img src="/assets/Logo/logo.png" alt="مركز حلول الأعمال للتدريب" className="h-12" />

                {/* الروابط */}
                <ul className="flex gap-6 text-lg font-semibold">
                    <li className="cursor-pointer hover:text-blue-900">الرئيسية</li>
                    <li className="cursor-pointer hover:text-blue-900">تعرف علينا</li>
                    <li className="cursor-pointer hover:text-blue-900">أهدافنا</li>
                    <li className="cursor-pointer hover:text-blue-900">الدورات التدريبية</li>
                    <li className="cursor-pointer hover:text-blue-900">تواصل معنا</li>
                </ul>

                {/* أيقونات التواصل الاجتماعي */}
                <div className="flex gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#0E6FA5] text-[#0E6FA5] hover:bg-[#0E6FA5] hover:text-white cursor-pointer">
                        <FaLinkedinIn size={18} />
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#0E6FA5] text-[#0E6FA5] hover:bg-[#0E6FA5] hover:text-white cursor-pointer">
                        <FaYoutube size={18} />
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#0E6FA5] text-[#0E6FA5] hover:bg-[#0E6FA5] hover:text-white cursor-pointer">
                        <FaSnapchatGhost size={18} />
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#0E6FA5] text-[#0E6FA5] hover:bg-[#0E6FA5] hover:text-white cursor-pointer">
                        <FaInstagram size={18} />
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#0E6FA5] text-[#0E6FA5] hover:bg-[#0E6FA5] hover:text-white cursor-pointer">
                        <FaFacebookF size={18} />
                    </div>
                </div>
            </div>


            <div className="container mx-auto flex justify-between items-center pt-6 text-sm border-t border-gray-400">
                <p>© 2024 جميع الحقوق محفوظة لدي مركز حلول الأعمال للتدريب</p>
                <p className="text-[#C7A640]">صنع في كيان</p>
            </div>
        </footer>
    );
};

export default Footer;
