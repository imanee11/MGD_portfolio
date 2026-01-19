import React from 'react';

const About = () => {
    return (
        <>
            <section className='px-[6vw] pt-[5vh] md:pt-[15vh] text-black dark:text-white'>
                <p className='font-bold text-center uppercase text-[23px] sm:text-[60px] md:text-[25px] leading-tight pb-7'>About me</p>
                <p className='text-center md:w-[60vw] mx-auto text-[20px] '>Hi, I’m <span className='font-semibold italic text-brand-primary'>Imane Magada</span>, a passionate photographer and videographer who loves capturing life’s special moments. Through my lens, I create visuals that tell stories and leave lasting impressions. Whether it’s a beautiful landscape or a memorable event, I focus on authenticity and emotion. When I’m not behind the camera, I’m exploring new creative ideas and perfecting my craft. Let’s create something unforgettable together!</p>
            </section>
        </>
    );
};

export default About;