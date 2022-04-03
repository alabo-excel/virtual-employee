import React from 'react';
import { Hero } from './images'
const HeroSection = () => {
    return (
        <div>
            <div>
                <div className="lg:flex hidden">
                    <div className="bg-dark-blue z-10 w-1/2 h-screen rounded-br-large">
                        <img src="/images/dots-dark.svg" className="absolute bottom-12 left-20" alt="" />
                    </div>
                    <div>
                        <img src="/images/dots-light.svg" className="absolute right-20 top-24" alt="" />
                    </div>
                    <div className="bg-lightsm:hidden rounded-tr-large h-96 w-full absolute bottom-0"></div>
                </div>
                <div className="lg:flex justify-center">
                    <div className="lg:absolute z-20 hero h-100 lg:flex lg:rounded-br-large top-40 md:w-full lg:w-10/12 52 mx-auto lg:rounded-3xl">
                        <div className="lg:pl-16 lg:text-left text-center md:p-10 my-auto sm:pt-16">
                            <div className="text leading-tight font-black text-dark-blue">Expand your team of
                                <br />
                                <span className="line">software developers</span>
                            </div>
                            <div className="text-2xl my-8 text-gray lg:w-auto w-80 md:mx-auto sm:mx-auto">
                                minus the investment of a swanky new office
                            </div>
                            <div>
                                <a href="#register">
                                    <input type="button" value="start 1-week free trial" className="capitalize text-white btn bg-blue p-5 px-12 sm:px-8 font-semibold text-lg rounded-md" />
                                </a>
                            </div>
                        </div>
                        <img className="ml-auto h-120 lg:block hidden absolute right-0 -top-16  rounded-br-large" src={Hero} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;