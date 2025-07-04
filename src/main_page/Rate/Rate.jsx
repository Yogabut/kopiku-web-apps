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
                                    Get your free gelato 
                                </h1>
                            </div>
                            <div className="relative inline-flex" data-aos = 'fade-left'>
                                <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#2F5249]"></span>
                                <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-8xl">Kopiku.</h1>
                            </div>
                        </h1>

                        {/* description */}
                        <p className="mt-8 text-base text-gray-600 sm:text-xl" data-aos = 'fade-up'>
                            Rate our coffee and get a free gelato on your next visit! Your feedback helps us improve and serve you better. 
                            Simply scan the QR code on your table, leave a rating, and enjoy a complimentary gelato on your next visit. 
                            Thank you for being a part of the Kopiku community!
                        </p>
                    </div>

                    <div className='flex justify-center lg:justify-end' data-aos = 'zoom-in'>
                        <img 
                            className="w-full max-w-sm sm:max-w-md lg:max-w-full h-auto object-contain" 
                            src="/asset/rate.png" 
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