import { React, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [UserName, setUserName] = useState("")
    const [Email, setEmail] = useState("")
    const [Contact, setContact] = useState("+49")
    const [Website, setWebsite] = useState("")
    const [Desc, setDesc] = useState("")
    const [Duration, setDuration] = useState("")

    const reset = () => {
        setUserName("")
        setEmail("")
        setDuration("")
        setContact("")
        setDesc("")
        setWebsite("")
    }
    let status;
    const submit = () => {
        // e.preventDefault()
        let data = {
            "name": UserName,
            "email": Email,
            "phone": Contact,
            "duration": Duration,
            "website_name": Website,
            "work_requirements": Desc
        }
        if (UserName.length === 0, Email.length === 0, Contact.length === 0, Duration.length === 0, Website.length === 0, Desc.length === 0) {
            toast.error("Please fill all the input field!")
            // console.log(Desc.length)
        } else {
            fetch('https://ipserversite.herokuapp.com/quotes/inquiry-form', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json; charset=utf-8'
                },
                mode: 'cors',
                body: JSON.stringify(data)
            })
                .then(response => {
                    status = response.status

                    response.json()
                })
                .then(data => {
                    if (status === 400) {
                        toast.error("Please fill all the input field!")
                    } else {
                        toast("Submitted!")
                        reset()
                    }
                    // console.log(data);
                });
        }
    }
    return (
        <div className="register bg-dark-blue" id="register">
            <ToastContainer />
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
                <form onSubmit={submit} className="lg:w-1/2 bg-white rounded-3xl py-20 sm:px-6 sm:py-8 p-10">
                    <div >
                        <div className="flex sm:block justify-between">
                            <div className="w-input sm:my-4">
                                <div className="my-2">
                                    <label className="font-bold">Name*</label>
                                </div>
                                <input type="text" onChange={e => setUserName(e.target.value)} placeholder="e.g. James Smith" className="p-3 border border-border w-full rounded-md" />
                            </div>
                            <div className="w-input sm:my-4">
                                <div className="my-2">
                                    <label className="font-bold">Email Address*</label>
                                </div>
                                <input onChange={e => setEmail(e.target.value)} type="text" placeholder="name@example.com" className="p-3 border border-border w-full rounded-md" />
                            </div>
                        </div>
                        <div className="flex sm:block justify-between">
                            <div className="my-2 w-input sm:my-4">
                                <div className="my-2">
                                    <label className="font-bold">Contact Number *</label>
                                </div>
                                <div className="flex">
                                    <input type="number" value={Contact} onChange={e => setContact(e.target.value)} className="p-3 border border-border w-full rounded-md" />
                                </div>
                            </div>
                            <div className="w-input my-2 sm:my-4">
                                <div className="my-2">
                                    <label className="font-bold">Project Duration *</label>
                                </div>
                                <select onChange={e => setDuration(e.target.value)} className="p-4 rounded-md bg-transparent border border-border w-full">
                                    <option value="More than 1 Year">More than 1 Year</option>
                                    <option value="6 Months to 1 Year">6 Months to 1 Year</option>
                                    <option value="3 to 6 Months"> 3 to 6 Months</option>
                                    <option value="1 to 3 Months"> 1 to 3 Months</option>
                                    <option value="Less than a Month">Less than a Month</option>
                                    <option value="Not Sure"> Not Sure</option>
                                    <option value="Apply for a Job">Apply for a Job</option>
                                </select>
                            </div>
                        </div>
                        <div className="my-4">
                            <div className="my-2">
                                <label className="font-bold">Website / Company</label>
                            </div>
                            <input onChange={e => setWebsite(e.target.value)} type="text" placeholder="www.yourwebsite.com" className="p-3 border border-border w-full rounded-md" />
                        </div>
                        <div className="my-4">
                            <div className="my-2">
                                <label className="font-bold">Work Requirement *</label>
                            </div>
                            <textarea onChange={e => setDesc(e.target.value)} name="" placeholder="Type your answer here" className="p-3 border border-border w-full rounded-md"></textarea>
                        </div>
                        <div className="mt-8">
                            <input type="button" onClick={submit} value="start 1-week free trial" className="p-4 font-bold capitalize btn bg-blue text-white w-full rounded-md" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;