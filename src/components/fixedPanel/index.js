import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const FixedPanel = (props) => {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const topOffset = window.scrollY;
            setIsFixed(topOffset > 112);
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);

        };
    }, []);

    return (
        <header className={`  bg-[#FFCC70] z-50 flex flex-row justify-between px-4 py-1 ${isFixed ? ('fixed  top-[0] w-full left-0') : ('')}`}>
            <p className=" font-[nazanin] text-center text-xl text-black  "> {props.pageTitle}</p>
            <Link className=" bg-green-500 px-2 py-1 rounded shadow hover:bg-green-300" href={'/home'}>بازگشت</Link>
        </header>

    );
};

export default FixedPanel;