import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);
    const accordionData = {
        title: 'Section 1',
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`
    };

    // const { title, content } = accordionData;
    return (
        <div className="accordion mr-10">
            <div className={isActive ? "bg-light p-6 rounded-lg border border-border" : `accordion-item nav py-6 border-b border-border px-6 p-2`}>
                <div
                    className="accordion-title flex justify-between"
                    onClick={() => setIsActive(!isActive)}
                >
                    <div className="font-bold text-dark-blue text-xl">{title}</div>
                    <div className="cursor-pointer text-2xl">{isActive ? '-' : '+'}</div>
                </div>
                {isActive && <div className="accordion-content text-lg text-text">{content}</div>}
            </div>
        </div>
    );
};

export default Accordion;