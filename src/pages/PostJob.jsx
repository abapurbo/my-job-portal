import React, { useEffect, useState } from 'react';
import UseAuth from '../Hooks/UseHooks';
import { Link } from 'react-router-dom';

const PostJob = () => {
    const { user } = UseAuth();
    const [postJobs, setPostJobs] = useState([]);
    console.log(postJobs)
    useEffect(() => {
        fetch(`http://localhost:4000/jobs?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setPostJobs(data))
    }, [user])
    return (
        <div className='mx-10'>
            <h1 className='text-3xl font-semibold m-12'>My Post Job:{postJobs.length}</h1>

            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job Title</th>
                            <th>Deadline</th>
                            <th>Application</th>
                            <th>View Application</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            postJobs.map((postJob, index) => (
                                <tr>
                                    <th>{index+1}</th>
                                    <td>{postJob.title}</td>
                                    <td>{postJob.applicationDeadline}</td>
                                    <td>{postJob.applicationCount}</td>
                                    <td>
                                        <Link to={`/viewJobApplication/${postJob._id}`}>
                                      <button className='btn btn-link'>View Application</button>
                                      </Link>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PostJob;