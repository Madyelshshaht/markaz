import React from 'react'

const TrainSection = ({ title, num, src }) => {
    return (
        <>
            <div className="section flex flex-col justify-center items-center md:p-7 py-7 text-white relative" >
                <div className="img p-2 rounded-full min-w-20 min-h-20 md:before:absolute before:w-0.5 before:h-40 before:left-0 before:top-6 before:bg-white" style={{ backgroundColor: "rgb(219, 255, 252, 0.4)" }}>
                    <img src={src} alt="gradution" className="w-12 m-auto mt-2" />
                </div>
                <h1 className="md:text-3xl font-bold mt-2">{num}</h1>
                <p className="md:text-lg font-semibold">{title}</p>
            </div>
        </>
    )
}

export default TrainSection