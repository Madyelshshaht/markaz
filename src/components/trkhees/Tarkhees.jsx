import React from 'react'
import WhyUs from '../WhyUS/WhyUs'

const Tarkhees = () => {
    return (
        <div className='flex lg:flex-row flex-col  justify-center items-center text-center' style={{ background: "linear-gradient(270deg, #0F5FA6 50%, #0B96A6 90%)" }} >
            <WhyUs src={"/assets/Why/Card Icon.png"} title={"الأعتماد والإشراف"} desc={"جميع الدورات معتمدة وتحت إشراف المؤسسة العامة للتدريب التقني والمهني رقم اإشراف 224109831504182"} />
            <WhyUs src={"/assets/Trainer/online-test 1.png"} title={"الترخيص الالكتروني"} desc={"حلول الأعمال للتدريب مرخص من المركز الوطني للتعليم رقم التخصص 2000055631041863"} />
        </div>
    )
}

export default Tarkhees;