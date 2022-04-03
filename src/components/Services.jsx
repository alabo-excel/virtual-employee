import { React, useState, useEffect } from 'react';
import Accordion from './Accordion';
import { Software1, Software2, Software3, Software4, Software5 } from "./images"

const Services = () => {
    const [image, setImage] = useState(Software1)

    useEffect(() => {
        setImage(Software1)
    }, [])
    const changeImage = (index) => {
        setImage(accordionData[index].img)
    }
    const width = window.innerWidth
    const accordionData = [
        {
            title: 'Enterprise Software Development',
            content: `From SharePoint to ERP, get business-specific apps built in little to no time.`,
            img: Software1
        },
        {
            title: 'Custom Software Development',
            content: `Looking for healthcare, financial, or any other bespoke software? We’ve your back.`,
            img: Software2
        },
        {
            title: 'Mobile & Web Application Development',
            content: `Right from native and hybrid apps to a full-fledged CMS, we build them all. `,
            img: Software3
        },
        {
            title: 'Desktop Application Development',
            content: `We specialize in 360o development and can build feature-packed apps for you. `,
            img: Software4
        },
        {
            title: 'Software Re-engineering',
            content: `Looking forward to sync ups or modifications? We can do it all.`,
            img: Software5
        }
    ];
    const mapAccordion = accordionData.map(({ title, img }, index) => {
        return (
            <div key={index}>
                <div className="bg-light-blue lg:absolute right-0 -top-12 bottom-0 rounded-3xl lg:rounded-tl-3xl lg:h-200 lg:w-1/2 sm:py-6">
                    <img src={img} alt="" className="lg:mt-44 w-4/5 mx-auto" />
                </div>
                <div className="my-8 font-bold text-dark-blue">{title}</div>
            </div>
        )
    })
    return (
        <div className="px-28 sm:p-4 py-8 relative">
            <div className="lg:flex sm:h-auto lg:h-screen">
                <div className="lg:w-1/2 ">
                    <div className="text text-dark-blue lg:text-left text-center font-bold py-6">
                        All the services<br />
                        you'd <span className="line">ever need</span>
                    </div>
                    <div className="lg:block hidden">
                        {accordionData.map(({ title, content, img }, index) => (
                            <Accordion changeImage={changeImage} img={img} key={index} index={index} title={title} content={content} />
                        ))}
                    </div>
                </div>
                <div className="lg:block hidden bg-light-blue lg:absolute right-0 -top-12 bottom-0 rounded-3xl lg:rounded-tl-3xl sm:rounded-3xl rounded-bl-large lg:h-200 lg:w-1/2 sm:py-6">
                    <img src={image} alt="" className="lg:mt-44 w-4/5 mx-auto" />
                </div>
                <div>
                    {width <= 850 ? mapAccordion : ""}
                </div>
            </div>
        </div>
    );
};

export default Services;