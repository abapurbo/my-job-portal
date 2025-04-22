import React, { useEffect, useState } from 'react';
import HotJobCard from './HotJobCard';
import UseAxiosSecure from '../Hooks/UseAxiosSecure';

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);
    const axiosSecure = UseAxiosSecure()
    useEffect(() => {
        axiosSecure.get('http://localhost:4000/jobs')
            .then(data => setJobs(data.data))
    }, [axiosSecure])
    return (
        <div>
            <div className='text-center my-10 space-y-2'>
                <h1 className='text-5xl font-semibold text-black'>Job of the day</h1>
                <p className='text-xl font-semibold text-gray-400'>Search and connect with the right candidates faster</p>
            </div>
            <div className='grid lg:grid-cols-4 mx-10 my-10 gap-5 '>

                {
                    jobs?.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;