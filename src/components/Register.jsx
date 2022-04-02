import React from 'react';

const Register = () => {
    return (
        <div className="register bg-dark-blue">
            <div className="lg:flex px-28 sm:p-0 py-20">
                <div className="lg:w-1/2 sm:p-4">
                    <div className="text leading-tight mb-16 font-bold text-white">
                        A swanky office is just<br />
                        one of our <span className="line">many USPs</span>
                    </div>
                    <div className="my-6">
                        <div className="underline text-yellow text-4xl font-bold"> 2675+ </div>
                        <div className='text-xl py-2 text-white'>software development projects</div>
                    </div>
                    <div className="my-6">
                        <div className="underline text-yellow text-4xl font-bold">  865+  </div>
                        <div className='text-xl py-2 text-white'>software developers up for hire</div>
                    </div>
                    <div className="my-6">
                        <div className="underline text-yellow text-4xl font-bold">  500+  </div>
                        <div className='text-xl py-2 text-white'>testimonials on record</div>
                    </div>
                </div>
                <div className="lg:w-1/2 bg-white rounded-3xl py-20 sm:px-6 sm:py-8 p-10">
                    <div className="flex sm:block justify-between">
                        <div className="w-input sm:my-4">
                            <div className="my-2">
                                <label className="font-bold">Name*</label>
                            </div>
                            <input type="text" placeholder="e.g. James Smith" className="p-3 border border-border w-full rounded-md" />
                        </div>
                        <div className="w-input sm:my-4">
                            <div className="my-2">
                                <label className="font-bold">Email Address*</label>
                            </div>
                            <input type="text" placeholder="name@example.com" className="p-3 border border-border w-full rounded-md" />
                        </div>
                    </div>
                    <div className="flex sm:block justify-between">
                        <div className="my-2 w-input sm:my-4">
                            <div className="my-2">
                                <label className="font-bold">Contact Number *</label>
                            </div>
                            <div className="flex">
                                <select className="p-4 rounded-md bg-transparent border border- border-border -mr-1">
                                    <option value="+234">+234</option>
                                </select>
                                <input type="number" className="p-3 border border-border w-full rounded-r-md" />
                            </div>
                        </div>
                        <div className="w-input my-2 sm:my-4">
                            <div className="my-2">
                                <label className="font-bold">Project Duration *</label>
                            </div>
                            <select className="p-4 rounded-md bg-transparent border border-border w-full">
                                <option value="+234">Select One</option>
                            </select>
                        </div>
                    </div>
                    <div className="my-4">
                        <div className="my-2">
                            <label className="font-bold">Website / Company</label>
                        </div>
                        <input type="text" placeholder="www.yourwebsite.com" className="p-3 border border-border w-full rounded-md" />
                    </div>
                    <div className="my-4">
                        <div className="my-2">
                            <label className="font-bold">Work Requirement *</label>
                        </div>
                        <textarea name="" placeholder="Type your answer here" className="p-3 border border-border w-full rounded-md"></textarea>
                    </div>
                    <div className="mt-8">
                        <input type="button" value="start 1-week free trial" className="p-4 font-bold capitalize bg-blue text-white w-full rounded-md" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;