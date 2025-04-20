import axios from 'axios';
import React from 'react';
import { useLoaderData} from 'react-router-dom';

const ViewJobApplication = () => {
    const applications = useLoaderData()
    const handleStatus = (e, id) => {
      const data={
        status:e.target.value
      }
       axios.patch(`http://localhost:4000/job-application/${id}`,data)
       .then(data=>console.log(data.data))
    }

    return (
        <div className="overflow-x-auto mx-10 rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Job</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        applications.map((application, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{application.application_email}</td>
                                <td>Quality Control Specialist</td>
                                <td>
                                    <select onChange={(e) => handleStatus(e, application._id)} defaultValue="Small" className="select select-sm">
                                        <option disabled={false}>Change status</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>
                            </tr>
                        ))
                    }


                </tbody>
            </table>
        </div>
    );
};

export default ViewJobApplication;