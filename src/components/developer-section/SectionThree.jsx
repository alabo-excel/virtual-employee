import React from 'react';
import { Office3, Quote, Jarret } from '../images'


const DevelopersSection = () => {
    return (
        <div className="bg-light p-28 py-40 -mt-14">
            <div className="relative flex justify-center">
                <div className="w-1/2 text bg-light mx-auto text-center z-20 absolute -top-12 mx-auto text-dark-blue font-bold p-6">
                    Developers who've<br />
                    <span className="line">the tools</span>  to see it through
                </div>
            </div>
            <div className="flex justify-between">
                <div className="w-2/5 office-img relative flex right-0">
                    <img src={Office3} className="rounded-3xl rounded-br-large z-10" alt="" />
                    {/* <div className="w-44 h-44 bg-light rounded-br-large rounded-tl-large"></div> */}
                </div>
                <div className="flex w-1/2 mt-auto mb-12">
                    <img src={Quote} className="w-20 h-20" alt="" />
                    <div className="text-2xl px-8 leading-normal text-normal">
                        They guided us with a great attitude and strong technical expertise.                        <div className="flex my-6">
                            <img src={Jarret} className="rounded-full" alt="" />
                            <div className="px-4 my-auto">
                                <div className="font-bold text-dark-blue text-xl py-1">Jarret Reeves</div>
                                <div className="text-base text-gray">Chairman- asint.net, USA</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DevelopersSection;