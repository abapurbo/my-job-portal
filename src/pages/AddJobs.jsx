import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';
import UseAuth from '../Hooks/UseHooks';

const AddJobs = () => {
    const {user}=UseAuth()
    const addJobs = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData)
        console.log(data)
        const { min, max, currency, ...newJob } = data
        newJob.salaryRange = { min, max, currency }
        newJob.requirements = newJob.requirements.split('\n')
        newJob.responsibilities = newJob.responsibilities.split('\n')

        axios.post('http://localhost:4000/jobs', newJob)
            .then(data => {
                if (data.data.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "New job added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    e.target.reset()
                }
            })

    }
    return (
        <div className='flex flex-col  space-y-4 m-7'>
            <h1 className='text-3xl text-blue-500 font-semibold'>Post a new job</h1>
            <div className="card bg-base-100 w-full shadow-2xl">
                <div className="card-body">
                    <form onSubmit={addJobs} className="fieldset">

                        <label className="label text-xl text-black font-semibold">Job Title</label>
                        <input type="text" className="input  w-full font-semibold " name='title' placeholder="Job title" />

                        <label className="label text-xl text-black font-semibold">Job Location</label>
                        <input type="text" className="input w-full" name='location' placeholder="Job Location" />
                        {/* job type */}
                        <div className='flex flex-col space-y-2 '>
                            <label for='jobType' className='text-xl font-semibold '>Job Type</label>
                            <select name='jobType' defaultValue="Pick a color" className="select w-full ">
                                <option disabled={true}>Pick a job type</option>
                                <option value='Full Time'>Full Time</option>
                                <option value='Part Time'>Part Time</option>
                                <option value='Internship'>Internship</option>
                            </select>
                        </div>
                        {/* job field */}
                        <div className='flex flex-col space-y-2'>
                            <label htmlFor="Job Field" className='text-xl font-semibold'>Job Field</label>
                            <select name='job_field' defaultValue="Pick a color" className="select w-full ">
                                <option disabled={false}>Pick a job field</option>
                                <option value='Engineering'>Engineering</option>
                                <option value='Marketing'>Marketing</option>
                                <option value='Finance'>Finance</option>
                                <option value='Teaching'>Teaching</option>
                            </select>
                        </div>
                        {/* salary range  */}
                        <div>
                            <h1 className='text-xl font-semibold my-2'>Salary Range</h1>
                            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 items-end'>
                                <div className='flex flex-col space-y-2'>
                                    <label htmlFor="salary range" className='text-[18px] font-semibold'>Min</label>
                                    <input type="text" placeholder='Min' name='min' className='input' required />
                                </div>
                                <div className='flex flex-col space-y-2'>
                                    <label htmlFor="salary range" className='text-[18px] font-semibold'>Max</label>
                                    <input type="text" placeholder='Min' name='max' className='input' required />
                                </div>
                                <div className='flex flex-col space-y-2'>
                                    <label htmlFor="salary range" className='text-[18px] font-semibold'>Currency</label>
                                    <select name='currency' id='currency' defaultValue="Pick a color" className="select w-full ">
                                        <option disabled={false}>Currency</option>
                                        <option value='BDT'>BDT</option>
                                        <option value='USD'>USD</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col space-y-2 '>
                            <label htmlFor="description" className='text-xl font-semibold'>Job description</label>
                            <textarea className="textarea w-full" name='description' placeholder="Job description"></textarea>
                        </div>

                        <div className='flex flex-col space-y-2 '>
                            <label htmlFor="description" className='text-xl font-semibold'>Job Requirements</label>
                            <textarea className="textarea w-full" name='requirements' placeholder="Job Requirements"></textarea>
                        </div>
                        <div className='flex flex-col space-y-2 '>
                            <label htmlFor="description" className='text-xl font-semibold'>Job Responsibilities</label>
                            <textarea className="textarea w-full" placeholder="Job Responsibilities" name='responsibilities'></textarea>
                        </div>
                        <div className='flex flex-col space-y-2'>

                            <label className="label text-xl text-black font-semibold">Company Name</label>
                            <input type="text" className="input  w-full font-semibold " name='company' placeholder="Company Name" required />

                        </div>
                        <div className='flex flex-col space-y-2'>

                            <label className="label text-xl text-black font-semibold">Company Logo</label>
                            <input type="url" className="input  w-full font-semibold " name='company_logo' placeholder="Company_logo" required />

                        </div>
                        <div className='flex flex-col space-y-2'>
                            <label className="label text-xl text-black font-semibold">HR Name</label>
                            <input type="text" className="input  w-full font-semibold " name='hr_name' placeholder="Hr Name" />

                        </div>
                        <div className='flex flex-col space-y-2'>
                            <label className="label text-xl text-black font-semibold">HR Email</label>
                            <input type="email"  className="input  w-full font-semibold " defaultValue={user?.email} name='hr_email' placeholder="Hr Email" required />

                        </div>
                        <div className='flex flex-col space-y-2'>
                            <label className="label text-xl text-black font-semibold">Deadline</label>
                            <input type="date"  className="input  w-full font-semibold "  name='applicationDeadline' placeholder="deadline" required />

                        </div>

                        <button className="btn btn-primary font-bold text-white mt-4">Add Job</button>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default AddJobs;