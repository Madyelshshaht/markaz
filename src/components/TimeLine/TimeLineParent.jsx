import React from 'react'
import Timeline from './TimeLine'


const TimeLineParent = () => {
    return (
        <div className='py-10 px-8' style={{
            backgroundImage: "url('/assets/Moatameeden/bg-timeline.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            <Timeline />
        </div>
    )
}

export default TimeLineParent