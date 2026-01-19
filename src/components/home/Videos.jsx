import React from 'react';


import Carousel2 from '../animation/Carousel2';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Videos = () => {
    return (
        <>
            <section className='pt-[5vh] md:py-[10vh] text-black dark:text-white'>
                <div className='px-[6vw] flex justify-between items-center pb-10'>
                    <p className="font-bold uppercase text-[30px] sm:text-[60px] md:text-[50px] leading-tight ">My videos</p>
                    <p className='w-[40vw] text-[14px] text-black/50 dark:text-white/50'>Editing allows me to add my personal touch, turning simple shots into timeless works of art.</p>
                </div>
                <div className='bg-dark-bg dark:bg-light-bg px-[6vw] py-[6vw]'>
                    <Carousel2 />
                </div>
            </section>
        </>
    );
};

export default Videos;