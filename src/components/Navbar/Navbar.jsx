'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';




const Navbar = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);



    return (
        <nav className="sticky top-0 z-10 w-full px-4 lg:px-5 lg:py-2">
            <div className="flex justify-between items-center max-w-7xl mx-auto ">
                <Link href="/" className=''>
                    <img src="/assets/Logo/logo.png" alt="logo" className='md:w-18 w-14' />
                </Link>
                <div className="hidden lg:flex gap-10 text-2xl ">
                    <a  href="#home" className="text-blue-gray-900 hover:text-blue-500 font-bold">الرئيسية</a>
                    <a  href="#knows" className="text-blue-gray-900 hover:text-blue-500 font-bold">تعرف علينا</a>
                    <a  href="#aims" className="text-blue-gray-900 hover:text-blue-500 font-bold">أهدافنا</a>
                    <a  href="#courses" className="text-blue-gray-900 hover:text-blue-500 font-bold">الدورات التدربية</a>
                </div>
                <button className="hidden rounded-3xl lg:block border-1 text-blue-700 border-blue-500 hover:text-white px-4 py-[5]  hover:bg-blue-600 transition font-bold">
                    تواصل معانا
                </button>
                <button onClick={() => setOpen(!open)} className="lg:hidden cursor-pointer">
                    {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                </button>
            </div>
            {/* Mobile */}
            {open && (
                <div className="lg:hidden flex flex-col  gap-4 p-4 bg-gray-100 mt-2 shadow-md rounded-md">
                    <Link href="/pages" className="text-blue-gray-900 hover:text-blue-500 font-bold">الرئيسية</Link>
                    <Link href="/account" className="text-blue-gray-900 hover:text-blue-500 font-bold">تعرف علينا</Link>
                    <Link href="/blocks" className="text-blue-gray-900 hover:text-blue-500 font-bold">أهدافنا</Link>
                    <Link href="/docs" className="text-blue-gray-900 hover:text-blue-500 font-bold">الدورات التدربية</Link>
                    <button className="border-1 text-blue-700 border-blue-500 hover:text-white px-4 py-2 rounded-3xl hover:bg-blue-600 transition font-bold">
                        تواصل معانا
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
