import React from 'react';
import { Hero } from './images'
const HeroSection = () => {
    return (
        <div>
            <div>
                <div className="flex">
                    <div className="bg-dark-blue z-10 w-1/2 h-screen rounded-br-large">
                        <img src="/images/dots-dark.svg" className="absolute bottom-12 left-20" alt="" />
                    </div>
                    <div>
                        <img src="/images/dots-light.svg" className="absolute right-20 top-24" alt="" />
                    </div>
                    <div className="bg-light rounded-tr-large h-96 w-full absolute bottom-0"></div>
                </div>
                <div className="flex justify-center">
                    <div className="absolute z-20 hero h-100 flex rounded-br-large top-32 w-10/12 52 mx-auto rounded-3xl">
                        <div className="pl-16 my-auto">
                            <div className="text leading-tight font-black text-dark-blue">Expand your team of
                                <br />
                                <span className="line">software developers</span>
                            </div>
                            <div className="text-2xl my-8 text-gray">
                                minus the investment of a swanky new office
                            </div>
                            <div>
                                <input type="button" value="start 1 week free trial" className="capitalize text-white bg-blue p-5 px-12 font-semibold text-lg rounded-md" />
                            </div>
                        </div>
                        <img className="ml-auto h-120 absolute right-0 -top-16  rounded-br-large" src={Hero} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;