import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from '../animation/Carousel';

const Gallery = () => {
    return (
        <>
            <section className="pt-[5vh] md:pt-[15vh] text-black dark:text-white overflow-x-hidden">
                <p className="text-center font-bold uppercase text-[30px] sm:text-[60px] md:text-[50px] leading-tight pb-10">
                    MY GALLERY
                </p>
                <div className='pl-[6vw] '>
                    <div className="flex justify-between items-center pb-4 text-sm md:text-base font-medium pr-[6vw]">
                        <p>2021–2022</p>
                        <p className="">VIEW ALL →</p>
                    </div>
                    <Carousel />
                </div>
            </section>
        </>
    );
};

export default Gallery;