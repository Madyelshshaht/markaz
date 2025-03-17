import React from 'react'

const WhyUs = ({ title, desc, src }) => {
    return (
        <>
            <div className='p-8 flex justify-center items-center lg:w-[33%]' >
                <div className="section flex flex-col justify-center gap-5 items-center md:py-7 md:px-10 py-7 rounded-2xl hover:bg-[#003666]  text-white " >
                    <div className="img p-2 rounded-full min-w-20 min-h-20" style={{ backgroundColor: "rgb(219, 255, 252, 0.4)" }}>
                        <img src={src} alt="gradution" className="w-12 m-auto mt-2" />
                    </div>
                    <h1 className="md:text-3xl text-xl font-bold mt-2">{title}</h1>
                    <p className="md:text-lg text-md  ">{desc}</p>
                </div>
            </div>
        </>
    )
}

export default WhyUs;