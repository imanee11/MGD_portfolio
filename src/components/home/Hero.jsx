import React from 'react';
import { images } from '../../constants';

const Hero = () => {
    return (
        <>
            {/* hero Section */}
            <section className="relative h-screen bg-cover bg-center px-[6vw]" style={{ backgroundImage: `url(${images.bg})` }}>
                <div className="absolute bottom-[10%] left-[6vw] text-white max-w-[90%]">
                    <div>
                        <p className="text-[32px] sm:text-[40px] md:text-[50px] leading-tight">_Hello! I'm</p>
                        <p className="font-bold uppercase text-[40px] sm:text-[60px] md:text-[80px] leading-tight">imane magada_</p>
                        {/* <p className="text-[12px] sm:text-[14px] text-right mt-2">
                            <ShinyText text="I create visuals that bring moments and emotions to life." disabled={false} speed={3} className="custom-class" />
                        </p> */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;