
import {
    Mail,
    Phone,
    User,
    ChevronDown,
    Linkedin,
    Twitter,
    Instagram,
    Facebook,
} from "lucide-react";
import Input from "../Input/Input";

const Contact = () => {



    return (
        <div className="bg-gradient-to-l from-[#0F5FA6] to-[#0B96A6] py-10 px-6 text-right ">
            <div className="flex md:flex-row-reverse flex-col justify-between items-center gap-5 bg-[#4c8dc5] py-15 lg:px-8 px-5 rounded-3xl lg:w-5/6 m-auto">
                <form className="space-y-4 md:w-1/2 w-full">
                    <div className="flex md:flex-row-reverse flex-col gap-4">
                        <div
                            className="relative w-full py-5 px-2 rounded-3xl  bg-white flex items-center"

                        >
                            <ChevronDown
                                className="absolute right-2 text-gray-500"
                                size={18}
                            />
                            <select
                                className="md:w-[100%] px-10 w-[90%] absolute  right-0 focus:outline-0  text-gray-600  py-2 rounded-3xl  appearance-none ">
                                <option className="p-3">اختر الدورة</option>
                                <option>دورة إدارة الأعمال</option>
                                <option>دورة البرمجة</option>
                            </select>
                        </div>
                        <Input
                            placeholder={"الاسم"}
                            icon={<User className="text-gray-500" size={18} />}
                        />
                    </div>

                    <div className="flex md:flex-row-reverse flex-col gap-4">
                        <Input
                            placeholder={"رقم الجوال"}
                            icon={<Phone className="text-gray-500" size={18} />}
                        />
                        <Input
                            placeholder={"البريد الإلكتروني"}
                            icon={<Mail className="text-gray-500" size={20} />}
                        />
                    </div>

                    <button className="w-full bg-white text-[#003666] font-semibold py-3 px-2 rounded-3xl shadow-md cursor-pointer hover:bg-gradient-to-l from-[#0F5FA6] to-[#0B96A6] hover:text-white">
                        إرسال
                    </button>
                </form>

                <div className="text-center">
                    <h3 className="text-white lg:text-5xl md:text-3xl font-semibold mb-4">
                        تواصل معنا
                    </h3>
                    <div className="flex justify-center gap-6">
                        <a
                            href="#"
                            className="text-white text-2xl hover:scale-110 transition"
                        >
                            <Linkedin />
                        </a>
                        <a
                            href="#"
                            className="text-white text-2xl hover:scale-110 transition"
                        >
                            <Twitter />
                        </a>
                        <a
                            href="#"
                            className="text-white text-2xl hover:scale-110 transition"
                        >
                            <Instagram />
                        </a>
                        <a
                            href="#"
                            className="text-white text-2xl hover:scale-110 transition"
                        >
                            <Facebook />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
