import React from 'react';
import { Office2, Quote, Travis } from '../images'


const DevelopersSection = () => {
    return (
        <div className="bg-light lg:p-28 p-20 mt-2 sm:p-4">
            <div className="lg:relative flex justify-center">
                <div className="lg:w-3/5 text bg-light mx-auto text-center z-20 lg:absolute -top-12 mx-auto text-dark-blue font-bold p-6">
                    Developers who'd come to<br />
                    your rescue when <span className="line">you're stuck</span>
                </div>
            </div>
            <div className="lg:flex justify-between">
                <div className="lg:w-2/5 office-img relative flex right-0">
                    <img src={Office2} className="rounded-3xl rounded-br-large z-10 mx-auto" alt="" />
                    {/* <div className="w-44 h-44 bg-light rounded-br-large rounded-tl-large"></div> */}
                </div>
                <div className="flex sm:block lg:w-1/2 lg:mt-auto mt-16 mb-12">
                    <img src={Quote} className="w-20 h-20 quote sm:w-8 sm:h-8" alt="" />
                    <div className="text-2xl sm:text-lg px-8 sm:px-0 leading-normal text-normal">
                        My team in the US could take on additional work, which they were not able to take on by themselves.
                        <div className="flex my-6">
                            <img src={Travis} className="rounded-full sm:w-14 sm:h-14" alt="" />
                            <div className="px-4 my-auto">
                                <div className="font-bold text-dark-blue text-xl py-1 sm:text-base">Travis Ridings</div>
                                <div className="text-base sm:text-sm text-gray">Director - Powertex Group, USA</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DevelopersSection;