import Lottie from 'lottie-react';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import detailsLogo from '../assets/lottie/jobdetils.json'
const JobsDetails = () => {
    const details=useLoaderData()

    return (
        <div className='mx-18 flex items-center space-x-18'>
           <div>
           <div className='flex  items-center space-x-1'>
              <img src={details.company_logo} className='w-10 object-cover bg-center' alt="" />
            <p className='text-2xl font-semibold'>{details.company}</p>
            </div>
            <div>
            <h1 className='text-4xl font-semibold '>{details.title}</h1>
             <p className='text-xl font-semibold'>Category: {details.category}</p>
             <p></p>
             <p className='text-xl font-semibold'>Job Type: {details.jobType}</p>
             <p className='text-xl font-semibold'>Location: {details.location}</p>
              
            </div>
            <div className='mt-2'>
                <Link to={`/jobApply/${details._id}`}>
                <button className='btn btn-primary font-bold'>Apply Now</button>
                </Link>
            </div>
           </div>
           <div>
             <Lottie animationData={detailsLogo}></Lottie>
           </div>
        </div>
    );
};

export default JobsDetails;