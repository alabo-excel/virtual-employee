import { React, useState, useEffect } from 'react';
import { LogoWhite, LogoDark } from "./images"

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("scroll", listenToScroll);
    }, [])
    const listenToScroll = () => {
        let heightToHideFrom = 3;
        const winScroll = document.body.scrollTop ||
            document.documentElement.scrollTop;

        if (winScroll > heightToHideFrom) {
            isVisible &&      // to limit setting state only the first time         
                setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };
    return (
        <div>
            {isVisible ?
                <div className="flex nav justify-between">
                    <div className="lg:w-1/2 bg-dark-blue py-4 pl-28 sm:p-4">
                        <img src={LogoWhite} alt="" />
                    </div>
                    <div className="lg:w-1/2 sm:p-3 pr-28 py-4 flex justify-end" >
                        <a href="tel:+49 176 41464 606">
                            <div className="w-12 h-12 px-4 py-2 text-lg sm:text-xs sm:py-2 sm:px-3 sm:h-8 sm:w-8 rounded-full bg-light hover:bg-blue text-blue hover:text-white mx-2">
                                <i className="bi bi-telephone-fill"></i>
                            </div>
                        </a>
                        {/* <div className="w-12 h-12 px-4 py-2 text-lg sm:text-xs sm:py-2 sm:px-3 sm:h-8 sm:w-8 rounded-full bg-light hover:bg-blue text-blue hover:text-white mx-2">
                            <i className="bi bi-skype"></i>
                        </div> */}
                        <a href="mailto:kontakt.concly@gmail.com">
                            <div className="w-12 h-12 px-4 py-2 text-lg sm:text-xs sm:py-2 sm:px-3 sm:h-8 sm:w-8 rounded-full bg-light hover:bg-blue text-blue hover:text-white mx-2">
                                <i className="bi bi-envelope-open-fill"></i>
                            </div>
                        </a>
                    </div>
                </div>
                :
                <div className="flex bg-white nav justify-between fixed w-screen z-30">
                    <div className="w-1/2 pl-28 py-4 pl-28 sm:p-4">
                        <img src={LogoDark} alt="" />
                    </div>
                    <div className="lg:w-1/2 sm:p-3 pr-28 py-4 flex justify-end" >
                        <div className="w-12 h-12 px-4 py-2 text-lg sm:text-xs sm:py-2 sm:px-3 sm:h-8 sm:w-8 rounded-full bg-light hover:bg-blue text-blue hover:text-white mx-2">
                            <i className="bi bi-telephone-fill"></i>
                        </div>
                        <div className="w-12 h-12 px-4 py-2 text-lg sm:text-xs sm:py-2 sm:px-3 sm:h-8 sm:w-8 rounded-full bg-light hover:bg-blue text-blue hover:text-white mx-2">
                            <i className="bi bi-skype"></i>
                        </div>
                        <div className="w-12 h-12 px-4 py-2 text-lg sm:text-xs sm:py-2 sm:px-3 sm:h-8 sm:w-8 rounded-full bg-light hover:bg-blue text-blue hover:text-white mx-2">
                            <i className="bi bi-envelope-open-fill"></i>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Navbar;