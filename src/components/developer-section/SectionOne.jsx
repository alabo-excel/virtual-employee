import React from 'react';
import { Office1, Quote, Larry } from '../images'


const DevelopersSection = () => {
    return (
        <div className="bg-light lg:p-28 p-20  sm:p-4">
            <div className="lg:relative flex justify-center">
                <div className="lg:w-1/2 text bg-light mx-auto text-center z-20 lg:absolute -top-12 mx-auto text-dark-blue font-bold lg:p-6 mb-8 lg:mb-0">
                    Developers who'd add <br />
                    <span className="line">more value</span> to your team
                </div>
            </div>
            <div className="lg:flex justify-between">
                <div className="lg:w-2/5 office-img relative flex right-0">
                    <img src={Office1} className="rounded-3xl rounded-br-large z-10 mx-auto" alt="" />
                    {/* <div className="w-44 h-44 bg-light rounded-br-large rounded-tl-large"></div> */}
                </div>
                <div className="flex sm:block lg:w-1/2 lg:mt-auto mt-16 mb-12">
                    <img src={Quote} className="w-20 h-20 sm:w-8 sm:h-8 quote" alt="" />
                    <div className="text-2xl sm:text-lg px-8 sm:px-0 leading-normal text-normal">
                        I would put our Virtual Employee development team up against any team in the world.
                        <div className="flex my-6">
                            <img src={Larry} className="rounded-full sm:w-14 sm:h-14" alt="" />
                            <div className="px-4 my-auto">
                                <div className="font-bold text-dark-blue text-xl sm:text-base py-1">Larry Spencer</div>
                                <div className="text-base sm:text-sm text-gray">VP - Sceris, USA</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DevelopersSection;