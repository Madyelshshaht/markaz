import { User } from 'lucide-react';
import React from 'react'

const Input = ({ placeholder, type = "", icon }) => {
    return (
        <>
            <div className="relative w-full bg-white py-3 px-3 rounded-3xl shadow-md flex items-center">
                <p>{icon}</p>
                <input
                    type="text"
                    placeholder={placeholder}
                    className="md:w-[80%]  absolute  right-9 focus:outline-0"
                />
            </div>
        </>
    )
}

export default Input;