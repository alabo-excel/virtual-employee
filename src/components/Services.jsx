import React from 'react';
import Accordion from './Accordion';
import { Software } from "./images"

const Services = () => {
    const accordionData = [
        {
            title: 'Section 1',
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`
        },
        {
            title: 'Section 2',
            content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
          reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
          quaerat iure quos dolorum accusantium ducimus in illum vero commodi
          pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
          quidem maiores doloremque est numquam praesentium eos voluptatem amet!
          Repudiandae, mollitia id reprehenderit a ab odit!`
        },
        {
            title: 'Section 3',
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`
        }
    ];
    return (
        <div className="px-28 sm:p-4 py-16 relative">
            <div className="lg:flex sm:h-auto h-screen">
                <div className="lg:w-1/2 ">
                    <div className="text text-dark-blue lg:text-left text-center font-bold py-6">
                        All the services<br />
                        you'd <span className="line">ever need</span>
                    </div>
                    <div className="lg:block hidden">
                        {accordionData.map(({ title, content }) => (
                            <Accordion title={title} content={content} />
                        ))}
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