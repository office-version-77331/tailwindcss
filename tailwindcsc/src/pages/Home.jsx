import React from 'react'
import image from '../assets/rozarpay.png'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className='min-h-screen '> {/** Home div */}


            <section className='bg-deepblue'>
                <div className=' w-10/12 max-w-[1080px]  flex items-center justify-between mx-auto'>{/**Hero div */}
                    <div className='space-y-8'>{/**Left div */}
                        <h1 className='font-mullish font-bold text-[40px] leading-[1.2] text-white'>
                            Power of your Finance, grow your Business
                        </h1>
                        <div className='w-6 h-1 bg-greenLight'></div>
                            <p className='text-white font-mullish text-[18px] leading-7 opacity-70  '>
                                Accept your payments, Automate payout to venders &
                                employee. And never run out of working capital.
                            </p>
                            <NavLink
                            className={' text-white px-4 py-1 border border-lightBlue rounded-sm bg-lightBlue'}
                            to='/signup'>

                                Sign Up Now
                            </NavLink>
                    </div>
                    <div > {/** Right div */}
                        <img className='max-w-[680px]' src={image} alt="image" />
                    </div>
                </div>

            </section>



        </div>
    )
}

export default Home