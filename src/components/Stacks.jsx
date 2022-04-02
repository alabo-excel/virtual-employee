import { React, useState, useEffect } from 'react';
import { stacks } from './data'

const Stacks = () => {
    const [num, setNum] = useState(0);

    const technologies = [
        "mobility",
        "full-stack",
        "microsoft technologies",
        "javascript",
    ]
    useEffect(() => {
        setNum(0)
    }, [])

    const mapTechs = technologies.map((tech, index) => {
        return (
            <button className={index === num ? "bg-blue text-white rounded-full w-auto flex-nowrap capitalize  px-10 font-bold" : " " + `p-4 mx-1 hover:bg-light-blue hover:text-blue rounded-full flex-nowrap text-black px-10 capitalize`} key={index} onClick={() => setNum(index)}>{tech}</button>
        )
    })
    const mapStacks = stacks[num].map((stack, index) => {
        return (
            <div key={index} className="w-52 sm:w-1/2 my-10 sm:my-4">
                <img className="mx-auto sm:w-8" src={stack.img} alt="" />
                <div className="font-bold text-base text-center mt-4 sm:text-sm">{stack.name}</div>
            </div>
        )
    })
    return (
        <div>
            <div className="py-8">
                <div className="lg:w-1/2 text mx-auto text-center z-20 -top-12 mx-auto text-dark-blue font-bold lg:p-6 mb-8 lg:mb-0">
                    <span className="line">Technology</span> is our way of life
                </div>
                <div className="my-4 sm:w-full overflow flex justify-between bg-light rounded-full  lg:w-9/12 p-1 mx-auto overflow-x-visible">
                    {mapTechs}
                </div>
                <div className="flex flex-wrap sm:w-full w-9/12  mx-auto justify-between px-10 nav">
                    {mapStacks}
                </div>
            </div>
        </div>
    );
};

export default Stacks;