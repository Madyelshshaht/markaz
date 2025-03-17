import React from 'react'
import WhyUs from './WhyUs'

const WhyParent = () => {
    return (
        <>
            <div className="div" style={{ background: "linear-gradient(270deg, #0F5FA6 50%, #0B96A6 90%)" }}>
                <h1 className='text-center md:text-5xl sm:text-3xl text-lg font-bold text-white pt-10' >لماذا تختار حلول لأعمال التدريب</h1>
                <div className="why flex lg:flex-row flex-col justify-center items-center md:text-center" >
                    <WhyUs src={"/assets/Why/star.png"} title={"جودة في التدريب"} desc={"نهتم بالمحتوي التدريبي القائم علي الواقع المهني أكثر من النظري مما يساعد المتدرب علي اكتساب العديد من المهارات والخبرات"} />
                    <WhyUs src={"/assets/Why/Card Icon.png"} title={"شهادات معتمدة"} desc={"جميع الدورات بشهادات معتمدة وعدد ساعات معتمدة من المؤسسة العامة للتدريب التقني والمهني"} />
                    <WhyUs src={"/assets/Why/calendr.png"} title={"متابعة مستمرة"} desc={"نعمل دائما علي تحقيق المتدرب لأكبر قدر من الإستفادة المهنية والتدريبية من خلال المتابعة المستمرة"} />
                </div>
            </div>
        </>
    )
}

export default WhyParent