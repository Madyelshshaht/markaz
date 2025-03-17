import React from 'react'

const KnowMe = () => {
    return (
        <div className="know-me " id='knows'>
            <div className="w-full flex md:flex-row flex-col justify-center items-center gap-5 py-5 md:px-20 px-10 ">
                <div className="img md:w-1/2 flex justify-center p-5">
                    <img src="/assets/KnowMe/Computer.png" alt="hero_img" />
                </div>
                <div className="contnet p-5 md:w-1/2">
                    <h1 className="md:text-5xl text-2xl font-bold pb-4 ">
                        تعرف علينا
                    </h1>
                    <p className="md:text-2xl text-md pb-4">
                        مركز حلول الأعمال للتدريب تأسست عام 2021 يعمل تحت إشراف المؤسسة العامة للتدريب التقني والمهني ومرخص من المركز الوطني للتعليم الالكتروني ومعتمد في المجال المالي والغداري والمجال الإجتماعي وتطوير الذات
                    </p>
                    <div className="flex gap-5 items-center">
                        <h2 className="md:text-3xl text-lg font-bold pb-4 bg-gradient-to-r from-gray-500 to-blue-900 text-transparent bg-clip-text">
                            تدريب -
                        </h2>
                        <h2 className="md:text-3xl text-lg font-bold pb-4 bg-gradient-to-r from-gray-500 to-blue-900 text-transparent bg-clip-text">
                            تطوير -
                        </h2><h2 className="md:text-3xl text-lg font-bold pb-4 bg-gradient-to-r from-gray-500 to-blue-900 text-transparent bg-clip-text">
                            تميز
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KnowMe