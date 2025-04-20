import React from 'react';
import { LiaMapMarkerSolid } from "react-icons/lia";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from 'react-router-dom';
const HotJobCard = ({ job }) => {
    const {_id, company, company_logo, description, jobType, location, salaryRange, title, requirements } = job
    return (
        <div className="p-2 rounded-xl space-y-2  bg-base-100 hover:scale-105 flex flex-col  duration-1000 shadow-sm">
            {/* */}
            <figure className='flex  space-x-3 justify-start items-start'>
                <img
                    className='w-10 object-center'
                    src={company_logo}
                    alt="Shoes" />
                <div className='flex flex-col'>
                    <h1 className='text-[18px] font-semibold '>{company}</h1>
                    <p className='flex items-center'><LiaMapMarkerSolid /> {location}</p>
                </div>

            </figure>
            <div className="p-2 flex flex-col space-y-2 flex-1">
                <h2 className="text-[18px] space-x-3 font-semibold">
                    {title}
                    <div className="badge ml-2 badge-primary">NEW</div>
                </h2>
                <div>
                    <p className='font-semibold text-gray-500'>{jobType}</p>
                </div>
                <div className='flex-1'>
                    <p className='text-gray-500 flex-1'>{description}</p>
                    <div className='flex flex-wrap flex-1 gap-2 my-2'>
                        {
                            requirements.map(requir => <span className='border-1 border-gray-400 p-1 rounded-xl hover:bg-gray-300 hover:text-white'>{requir}</span>)
                        }
                    </div>
                </div>
                <div className="flex mb-0 gap-2 items-center">
                    <p className='flex items-center text-[14px] text-gray-400'>Salary:<BsCurrencyDollar />{salaryRange.min}-{salaryRange.max} bdt</p>
                   <Link to={`/jobs/details/${_id}`}>
                   <button className='btn text-blue-400 hover:bg-blue-400 hover:text-white'>Apply</button>
                   </Link>
                </div>

            </div>
        </div>
    );
};

export default HotJobCard;