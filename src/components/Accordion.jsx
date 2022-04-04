import React, { useState } from 'react';

const Accordion = ({ title, content, changeImage, index }) => {
    const [isActive, setIsActive] = useState(null);
    const toggle = (index) => {
        if (isActive === index) {
            return setIsActive(null)
        }
        setIsActive(index)
    }
    return (
        <div className="accordion mr-10">
            <div
                className={isActive === index ? "bg-light p-6 rounded-lg border border-border" : `accordion-item py-6 border-b border-border px-6 p-2`}
                onClick={() => changeImage(index)}
            >
                <div
                    className="accordion-title flex justify-between"
                    onClick={() => toggle(index)}
                >
                    <div className="font-bold text-dark-blue text-xl">{title}</div>
                    <div className="cursor-pointer text-2xl">{isActive === index ? '-' : '+'}</div>
                </div>
                <div className={isActive === index ? 'content show' : 'content'}>
                    {content}
                </div>
            </div>
        </div>
    );
};

export default Accordion;