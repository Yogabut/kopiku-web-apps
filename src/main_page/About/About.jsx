import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const About = () => {
    useEffect(() => {
        Aos.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out'
            });
        }, 
    []);

    return(
        <div className="relative" id="about">
            {/* Green curved background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <svg 
                    className="absolute top-0 left-0 w-full h-full" 
                    viewBox="0 0 1200 800" 
                    preserveAspectRatio="xMidYMid slice"
                >
                    <defs>
                        <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{stopColor: '#2F5249', stopOpacity: 0.1}} />
                            <stop offset="50%" style={{stopColor: '#2F5249', stopOpacity: 0.05}} />
                            <stop offset="100%" style={{stopColor: '#2F5249', stopOpacity: 0.02}} />
                        </linearGradient>
                    </defs>
                    <path 
                        d="M0,400 Q300,200 600,350 T1200,300 L1200,0 L0,0 Z" 
                        fill="url(#greenGradient)"
                    />
                    <path 
                        d="M0,600 Q400,400 800,550 T1200,500 L1200,800 L0,800 Z" 
                        fill="url(#greenGradient)"
                    />
                </svg>
            </div>

            <section className="relative py-5 sm:py-8 lg:py-12 z-10">
                <div 
                    data-aos='fade-left'
                >
                    <p className="text-8xl font-bold text-black sm:text-4xl lg:text-8xl mt-10 mb-5 font-sans text-start pl-30">
                        Our Story
                    </p>
                </div>
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                        <div 
                            className='flex justify-center lg:justify-end'
                            data-aos='zoom-in'
                        >
                            <img 
                                className="w-full max-w-sm sm:max-w-md lg:max-w-full h-auto object-contain rounded-2xl shadow-lg" 
                                src="/asset/coffeeshop.png" 
                                alt="Coffee Shake" 
                            />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                                <div 
                                    className="relative inline-flex" 
                                    data-aos='fade-right'
                                >
                                    <h1>About</h1>
                                </div><br />
                                <div 
                                    className="relative inline-flex" 
                                    data-aos='fade-left'
                                >
                                    <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#2F5249]"></span>
                                    <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-8xl">Kopiku</h1>
                                </div>
                            </h1>
                            {/* description */}
                            <p 
                                className="mt-8 text-base text-gray-600 sm:text-xl" 
                                data-aos='fade-up'
                            >
                                Founded in 2022, Kopiku Cafe started as a small coffee corner with a mission to serve great coffee and create a cozy space for everyone. "Kopiku" means "my coffee", a name that reflects personal connection in every cup.
                                From local beans and handcrafted brews, we've expanded to offer non-coffee drinks and comfort food like rice bowls, croissants, and sandwiches.
                                Kopiku is more than just a café — it's a place to work, relax, and feel at home
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;