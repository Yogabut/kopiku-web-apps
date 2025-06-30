import React, { useState } from 'react';

const Hero = () => {        
    return (
    <div className="pt-5">
        <section className="py-10 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                    <div>
                        <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                            Enjoy your moment with <br />
                            <div className="relative inline-flex">
                                <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#2F5249]"></span>
                                <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-8xl">Kopiku.</h1>
                            </div>
                        </h1>

                        {/* description */}
                        <p className="mt-8 text-base text-gray-600 sm:text-xl">
                            Kopiku Cafe serves premium coffee, tea, matcha, chocolate drinks, mocktails, and a variety of comfort foods like rice bowls, croissants, sandwiches, and cookies. With its warm ambiance and modern design, Kopiku is the perfect spot for coffee lovers, remote workers, or casual hangouts.
                        </p>

                        <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                            <a href="#" title="" className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-[#A86523] hover:bg-[#594100] focus:bg-[#594100] rounded-2xl" role="button"> 
                                Kopiku Menu
                            </a>
                        </div>
                    </div>

                    <div className='flex justify-center lg:justify-end'>
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