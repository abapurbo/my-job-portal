import React from 'react';
import { motion } from "motion/react"
import team1 from '../../assets/image/team1.jpg'
import team2 from '../../assets/image/team2.jpg'
const Banner = () => {
    return (
        <div>
            <div className="hero  bg-base-200 min-h-screen  px-10">
                <div className="hero-content flex-col my-20 lg:flex-row-reverse">
                    <div className='flex-1'>
                        <motion.img
                            src={team1}
                            animate={{ y: [0, 50, 0] }}
                            transition={{ duration: 10, repeat: Infinity }}
                            className="w-66 rounded-t-3xl rounded-r-3xl border-l-6 border-b-6 border-blue-500  shadow-2xl" />
                        <motion.img
                            src={team2}
                            animate={{ x: [100, 150, 100] }}
                            transition={{ duration: 10,delay:5, repeat: Infinity }}
                            className="w-66 rounded-t-3xl rounded-r-3xl  border-l-6 border-b-6 border-blue-500  shadow-2xl" />
                    </div>
                    <div className='flex-1'>
                        <h1
                            animate={{ x: 50 }}
                            transition={{ duration: 2, color: ['red', 'blue'], delay: 1, ease: 'linear', repeat: Infinity }}
                            className="text-5xl font-bold">Lets <motion.span animate={{ color: ['red', 'purple', 'blue'] }} transition={{duration:2,repeat:Infinity}}>job</motion.span> for you!</h1>
                        <p className="py-6 ">
                        Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day
                        </p>
                        <button  className="btn hover:scale-120 btn-primary font-bold">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;