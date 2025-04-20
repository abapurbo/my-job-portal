import React, { useEffect, useState } from 'react';
import UseAuth from '../Hooks/UseHooks';
import axios from 'axios';

const MyApplication = () => {
    const {user}=UseAuth();
    const [jobs,setJobs]=useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:4000/job-application?email=${user?.email}`)
        .then(data=>setJobs(data.data))
    },[user.email,jobs])
    
    // delete job application
    const handleApplicationDelete=id=>{
        axios.delete(`http://localhost:4000/job-application/${id}`)
        .then(data=>console.log(data.data))
    }
    return (
        <div className="m-18">
            <table className="table">
                {/* head */}
                <thead>
                    <tr><th>Checkbox</th>
                        <th>Company logo</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                   {
                  jobs.length==0?'Not found': jobs.map(job=>(
                    <tr key={job._id}>
                    <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                    </th>
                    <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                                <div className="mask mask-squircle h-12 w-12">
                                    <img
                                        src={job.company_logo}
                                        alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">{job.title}</div>
                                <div className="text-sm opacity-50">{job.location}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        Zemlak, Daniel and Leannon
                        <br />
                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                    </td>
                    <td>Purple</td>
                    <th>
                        <button onClick={()=>handleApplicationDelete(job._id)
                        } className="btn btn-ghost btn-xl">x</button>
                    </th>
                </tr>
                   ))
                   }
                  
                </tbody>
                {/* foot */}
               
            </table>
        </div>
    );
};

export default MyApplication;