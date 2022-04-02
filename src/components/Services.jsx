import React from 'react';
import { Software } from "./images"

const Services = () => {
    // var acc = document.getElementsByClassName("accordion");
    // var i;

    // for (i = 0; i < acc.length; i++) {
    // acc[i].addEventListener("click", function () {
    // this.classList.toggle("active");
    // var panel = this.nextElementSibling;
    // if (panel.style.display === "block") {
    //     panel.style.display = "none";
    // } else {
    //     panel.style.display = "block";
    // }
    // });
    // }

    // const toggleAcc = () =>{
    //     classList.toggle("active");
    //     // var panel = this.nextElementSibling;
    //     // if (panel.style.display === "block") {
    //     //     panel.style.display = "none";
    //     // } else {
    //     //     panel.style.display = "block";
    //     // }
    // }

    return (
        <div className="px-28 sm:p-4 py-16 relative">
            <div className="lg:flex sm:h-auto h-screen">
                <div className="lg:w-1/2 ">
                    <div className="text text-dark-blue lg:text-left text-center font-bold py-6">
                        All the services<br />
                        you'd <span className="line">ever need</span>
                    </div>
                    <div className="lg:block hidden">
                        <button className="accordion">Section 1</button>
                        <div className="panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>

                        <button className="accordion">Section 2</button>
                        <div className="panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>

                        <button className="accordion">Section 3</button>
                        <div className="panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-light-blue lg:absolute right-0 -top-12 bottom-0 rounded-3xl lg:rounded-tl-3xl sm:rounded-3xl rounded-bl-large lg:h-150 lg:w-1/2 sm:py-6">
                    <img src={Software} alt="" className="lg:mt-44 w-4/5 mx-auto" />
                </div>
            </div>
        </div>
    );
};

export default Services;