import Aos from 'aos';
import React, { useState, useEffect } from 'react';

const Hero = () => { 
    useEffect(() => {
        Aos.init({
            duration: 1500,
            once: true,
            easing: 'ease-in-out'
        });
    }, []);       
    return (
    <div className="pt-10" id='home'>
        <section className="py-5 sm:py-8 lg:py-16">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                    <div>
                        <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                            <div className="relative inline-flex" data-aos = 'fade-right'>
                                <h1>
                                    Enjoy your moment with 
                                </h1>
                            </div>
                            <div className="relative inline-flex" data-aos = 'fade-left'>
                                <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#2F5249]"></span>
                                <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-8xl">Kopiku.</h1>
                            </div>
                        </h1>

                        {/* description */}
                        <p className="mt-8 text-base text-gray-600 sm:text-xl" data-aos = 'fade-up'>
                            Kopiku Cafe serves premium coffee, tea, matcha, chocolate drinks, mocktails, and a variety of comfort foods like rice bowls, croissants, sandwiches, and cookies. With its warm ambiance and modern design, Kopiku is the perfect spot for coffee lovers, remote workers, or casual hangouts.
                        </p>

                        <div className="mt-10 sm:flex sm:items-center sm:space-x-8" data-aos = 'fade-down'>
                            <a href="#menu" title="" className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-[#A86523] hover:bg-[#594100] focus:bg-[#594100] rounded-2xl" role="button"> 
                                Kopiku Menu
                            </a>
                        </div>
                    </div>

                    <div className='flex justify-center lg:justify-end' data-aos = 'zoom-in'>
                        <img 
                            className="w-full max-w-sm sm:max-w-md lg:max-w-full h-auto object-contain" 
                            src="/asset/coffeeshake.png" 
                            alt="Coffee Shake" 
                        />
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}

export default Hero;