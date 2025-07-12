import Aos from 'aos';
import React, { useState, useEffect } from 'react';

const Rate = () => { 
    useEffect(() => {
        Aos.init({
            duration: 1500,
            once: true,
            easing: 'ease-in-out'
        });
    }, []);       
    return (
    <div className="pt-10" id='rate'>
        <section className="py-2 sm:py-2 lg:py-8">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                    <div>
                        <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                            <div className="relative inline-flex" data-aos = 'fade-right'>
                                <h1>
                                    Grab KopiKu Merchant <br />Now!!
                                </h1>
                            </div>
                            {/* <div className="relative inline-flex" data-aos = 'fade-left'>
                                <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#2F5249]"></span>
                                <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-8xl">Kopiku.</h1>
                            </div> */}
                        </h1>

                        {/* description */}
                        <p className="mt-8 text-base text-gray-600 sm:text-xl" data-aos = 'fade-up'>
                            This is our exclusive line of Kopiku merchandise — thoughtfully designed for our loyal customers and coffee lovers alike. You can purchase these items directly at our physical store to experience the quality firsthand, or conveniently order online through our official platform. Each item is crafted with care, perfect as a gift or a personal collectible to show your love for Kopiku.
                        </p>
                        {/* button to merchan*/}
                        <div className="mt-6">
                            <a 
                                href="/Merchandise" 
                                className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-[#2F5249] rounded-lg hover:bg-[#1E3A3D] transition-colors duration-300"
                                data-aos = 'fade-up'
                            >
                                Explore Merchandise
                            </a>
                        </div>
                    </div>

                    <div className='flex justify-center lg:justify-end w-150' data-aos = 'zoom-in'>
                        <img 
                            className="w-full max-w-sm sm:max-w-md lg:max-w-full h-auto object-contain" 
                            src="/asset/merchant2.jpg" 
                            alt="Coffee Shake" 
                        />
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}

export default Rate;