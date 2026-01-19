import React from 'react';
import { images } from '../../constants';

const Works = () => {
    return (
        <>
            <section className="px-[6vw] pt-[5vh] md:pt-[10vh] text-black dark:text-white">
                <p className="font-bold uppercase text-[30px] sm:text-[60px] md:text-[50px] leading-tight pb-10">My works</p>
                <div className="flex flex-col md:flex-row gap-2  md:h-[65vh] w-full">
                    <div className="h-[60vh] md:h-[100%] w-[100%] md:w-[24%]"><img src={images.bg} alt="" className="h-[100%] w-[100%] object-cover" /></div>
                    <div className="h-[60vh] md:h-[100%] w-[100%] md:w-[24%]"><img src={images.bg} alt="" className="h-[100%] w-[100%] object-cover" /></div>
                    <div className="h-[60vh] md:h-[100%] w-[100%] md:w-[24%]"><img src={images.bg} alt="" className="h-[100%] w-[100%] object-cover" /></div>
                    <div className="h-[60vh] md:h-[100%] w-[100%] md:w-[24%]"><img src={images.bg} alt="" className="h-[100%] w-[100%] object-cover" /></div>
                </div>
            </section>
        </>
    );
};

export default Works;