import React from 'react';
import { Office2, Quote, Travis } from '../images'


const DevelopersSection = () => {
    return (
        <div className="bg-light p-28">
            <div className="relative flex justify-center">
                <div className="w-3/5 text bg-light mx-auto text-center z-20 absolute -top-12 mx-auto text-dark-blue font-bold p-6">
                    Developers who'd come to<br />
                    your rescue when <span className="line">you're stuck</span>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="w-2/5 office-img relative flex right-0">
                    <img src={Office2} className="rounded-3xl rounded-br-large z-10" alt="" />
                    {/* <div className="w-44 h-44 bg-light rounded-br-large rounded-tl-large"></div> */}
                </div>
                <div className="flex w-1/2 mt-auto mb-12">
                    <img src={Quote} className="w-20 h-20" alt="" />
                    <div className="text-2xl px-8 leading-normal text-normal">
                        My team in the US could take on additional work, which they were not able to take on by themselves.
                        <div className="flex my-6">
                            <img src={Travis} className="rounded-full" alt="" />
                            <div className="px-4 my-auto">
                                <div className="font-bold text-dark-blue text-xl py-1">Travis Ridings</div>
                                <div className="text-base text-gray">Director - Powertex Group, USA</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DevelopersSection;