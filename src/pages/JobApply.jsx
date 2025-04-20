import Lottie from 'lottie-react';
import React from 'react';
import applyLogo from '../assets/lottie/apply.json'
import { useParams } from 'react-router-dom';
import UseAuth from '../Hooks/UseHooks';
import axios from 'axios';
import Swal from 'sweetalert2';
const JobApply = () => {
    const { user } = UseAuth()
    const { id } = useParams()
    console.log(id)
    const submitApplyJob = (e) => {
        e.preventDefault();
        const linkedIn = e.target.linkedIn.value;
        const github = e.target.github.value;
        const resume = e.target.resume.value;
        console.log(linkedIn, github, resume)

        const jobApplication = {
            job_id: id,
            application_email: user.email,
            linkedIn,
            github,
            resume

        }
        axios.post('http://localhost:4000/job-application', jobApplication)
            .then(data =>{
                console.log(data)
                if(data.data.insertedId){
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Your application added successfully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                    <Lottie animationData={applyLogo} className='w-86'></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-3xl my-4 text-center font-bold">Apply job good luck!</h1>
                        <form onSubmit={submitApplyJob} className="fieldset">
                            <div className='space-y-2'>
                                <label className="label text-xl font-semibold text-black">LinkedIn URL</label>
                                <input type="url" className="input" name='linkedIn' placeholder="LinkedIn URL" />
                            </div>
                            <div className='space-y-2'>
                                <label className="label text-xl font-semibold text-black">Github URL</label>
                                <input type="url" className="input" name='github' placeholder="Github URL" />
                            </div>
                            <div className='space-y-2'  >
                                <label className="label text-xl font-semibold text-black">Resume URL</label>
                                <input type="url" className="input" name='resume' placeholder="Resume URL" />
                            </div>

                            <button className="btn btn-neutral mt-4">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobApply;