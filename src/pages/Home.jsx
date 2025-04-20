import Banner from './Banner/Banner';
import { Swiper, SwiperSlide } from 'swiper/react';
import jobHiring from '../assets/lottie/jobhiring.json'
import 'swiper/css';
import './style.css'
import marketing from '../assets/image/marketing.png'
import customer from '../assets/image/support.png'
import finance from '../assets/image/finance.png'
import software from '../assets/image/bulb.png'
import user from '../assets/image/user.png'
import management from '../assets/image/computer.png'
import product from '../assets/image/product.png'
import research from '../assets/image/search.png'
import hiring from '/hiring.svg'
import Lottie from 'lottie-react';
import HotJobs from './HotJobs';

const Home = () => {
   
    return (
        <div >
            <div>
                <Banner></Banner>
            </div>
            <div className='m-10 '>
                <div className='text-center space-y-5 '>
                    <h1 className='text-5xl '>Browser by category</h1>
                    <p className='text-xl font-thin'>Find the job that’s perfect for you. about 800+ new jobs everyday</p>
                    {/* swiper  */}
                    <Swiper
                        spaceBetween={15}
                        slidesPerView={4}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        className='swiper '
                    >
                        <SwiperSlide>
                            <div className=' border-1 rounded-xl p-4 hover:scale-105 flex flex-col justify-start items-start duration-700'>
                                <img src={marketing} className='w-10' alt='this is category image' />
                                <h1 className='font-bold text-[18px]'>Marketing & Sale</h1>
                                <span className='text-[15px] font-semibold'>1543 jobs Available</span>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' border-1 rounded-xl p-4 hover:scale-105 flex flex-col justify-start items-start duration-700' >
                                <img src={customer} className='w-10' alt='this is category image' />
                                <h1 className='font-bold text-xl'>Customer Help</h1>
                                <span className='text-[15px] font-semibold'>185 jobs Available</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>  <div className=' border-1  rounded-xl p-4 h-26 space-x-4 hover:scale-105 flex justify-start  items-center h duration-700' >
                            <img src={finance} className='w-10' alt='this is category image' />
                            <div className='flex flex-col justify-start items-start'>
                                <h1 className='text-xl font-bold '>Finance</h1>
                                <span className='font-semibold text-[15px]'>185 jobs Available</span>
                            </div>
                        </div> </SwiperSlide>
                        <SwiperSlide>   <div className=' border-1  rounded-xl p-4 h-26 space-x-4 hover:scale-105 flex justify-start  items-center h duration-700'  >
                            <img src={software} className='w-10' alt='this is category image' />
                            <div className='flex flex-col justify-start items-start'>
                                <h1 className='text-xl font-bold '>Software</h1>
                                <span className='font-semibold text-[15px]'>1700 jobs Available</span>
                            </div>
                        </div> </SwiperSlide>
                        <SwiperSlide>
                            <div className=' border-1  rounded-xl p-4 space-x-2 hover:scale-105 flex item-center duration-700' >
                                <img src={user} className='w-10 object-cover' alt='this is category image' />
                                <div className='flex  flex-col justify-start items-start'>
                                    <h1 className='text-[18px] font-bold'>Human Resource</h1>
                                    <span className='text-[15px] font-semibold'>2 jobs available</span>
                                </div>
                            </div> </SwiperSlide>
                        <SwiperSlide>  <div className=' border-1  rounded-xl p-4 hover:scale-105 flex space-x-2 duration-700' >
                            <img src={management} className='w-10 object-cover' alt='this is category image' />
                            <div className='flex flex-col justify-start items-start'>
                                <h1 className='text-[18px] font-bold'>Management</h1>
                                <span className='text-[15px] font-semibold'>4 Job available</span>
                            </div>
                        </div> </SwiperSlide>
                        <SwiperSlide>  <div className=' border-1 rounded-xl p-4 hover:scale-105 flex items-center space-x-2 duration-700' >
                            <img src={product} className='w-10 object-cover' alt='this is category image' />
                            <div className='flex flex-col justify-start items-start'>
                                <h1 className='text-[18px] font-bold'>Retails & product</h1>
                                <span className='text-[15px] font-semibold'>4 Job available</span>
                            </div>
                        </div>  </SwiperSlide>
                        <SwiperSlide><div className=' border-1 rounded-xl p-4 hover:scale-105 flex space-x-2 items-center duration-700' >
                            <img src={research} className='w-10 object-cover' alt='this is category image' />
                            <div className="flex flex-col justify-start items-start">
                                <h1 className='text-[18px] font-bold'>Software</h1>
                                <span className='text-[15px] font-semibold'>1 Job available</span>
                            </div>
                        </div></SwiperSlide>
                        {/* <span>...</span> */}
                    </Swiper>

                </div>


            </div>
            {/*job hiring card */}
            <div className='mx-18 bg-white shadow-xl rounded-xs  border-1 border-gray-300 my-10'>
                <div className='ml-2 flex flex-row items-center space-x-2 '>
                    <Lottie className='w-46' animationData={jobHiring}></Lottie>
                    <div className='flex flex-col justify-center items-start'>
                        <h1 className='text-[19px] text-gray-400 font-semibold'>WE ARE</h1>
                        <h1 className='text-6xl font-bold'>HIRING </h1>
                    </div>
                    <div className='flex  items-center'>
                        <p className=' text-xl font-semibold text-gray-400 mt-9'>Let’s Work Together & Explore Opportunities</p>
                        <div className='flex items-center mr-8'>
                            <button className='btn bg-blue-500 text-white mr-2 font-semibold'>Apply Now</button>
                            <img className='object-cover' src={hiring} alt="hiringjob" />
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
            {/* job card section */}
            <div>
              <HotJobs></HotJobs>
            </div>
        </div>
    );
};

export default Home;