import React from 'react';
import { images } from '../../constants';
import ShinyText from '../animation/ShinyText';
import LiquidEther from '../animation/LiquidEther';

const Hero = () => {
    return (
        <section className="relative h-screen w-full">
            {/* LiquidEther animation */}
            <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
                <LiquidEther
                    colors={['#5227FF', '#FF9FFC', '#B19EEF']}
                    mouseForce={20}
                    cursorSize={100}
                    isViscous
                    viscous={30}
                    iterationsViscous={32}
                    iterationsPoisson={32}
                    resolution={0.5}
                    isBounce={false}
                    autoDemo
                    autoSpeed={0.5}
                    autoIntensity={2.2}
                    takeoverDuration={0.25}
                    autoResumeDelay={3000}
                    autoRampDuration={0.6}
                    color0="#5227FF"
                    color1="#FF9FFC"
                    color2="#B19EEF"
                />
            </div>

            {/* Hero content */}
            <div className="absolute bottom-[10%] left-[6vw] text-black dark:text-white max-w-[90%] z-20">
                <p className="text-[32px] sm:text-[40px] md:text-[50px] leading-tight">_Hello! I'm</p>
                <p className="font-bold uppercase text-[40px] sm:text-[60px] md:text-[80px] leading-tight">
                    imane magada_
                </p>
                <p className="text-[12px] sm:text-[14px] text-left lg:text-right mt-2">
                    <ShinyText
                        text="I create visuals that bring moments and emotions to life."
                        speed={2}
                        delay={0}
                        color="#787878"
                        shineColor="#ffffff"
                        spread={120}
                        direction="left"
                        yoyo={false}
                        pauseOnHover={false}
                        disabled={false}
                    />
                </p>
            </div>
        </section>
    );
};

export default Hero;
