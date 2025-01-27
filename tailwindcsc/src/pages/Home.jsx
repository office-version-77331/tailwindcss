import React from 'react'
import {Check} from 'lucide-react'
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
                        <div className='py-3'>

                        <NavLink
                            className={' text-white  px-4 py-1 border border-lightBlue rounded-md bg-lightBlue'}
                            to='/signup'>

                            Sign Up Now
                        </NavLink>
                        </div>
                    </div>
                    <div > {/** Right div */}
                        <img className='max-w-[680px]' src={image} alt="image" />
                    </div>
                </div>

            </section>
            <section className='relative mt-48'> {/**Feature section  */}
                <div className='relative w-11/12 max-w-[1080px] mx-auto pt-4'>
                    <div className=''>{/** content div  */}
                        <h2 className='font-mullish text-center text-2xl font-extrabold leadding[1.2]'>
                            Accept Payments with RozarPay payment suite
                        </h2>
                        <div className='w-6 h-1 bg-lightBlue mx-auto my-3'>
                        </div>
                        <div className='flex w-full bg-white rounded-sm px-10 py-12 min-h-[520px]'> {/** Holds Toe main div  */}
                            <div className='flex flex-col  gap-10 w-full'> {/** inner left div */}
                                <h3 className='font-mullish text-[28px] leading-10 font-bold max-w-[500px]'>
                                    SuperCharge  your Business with all-powerful
                                    <span className='text-lightBlue pl-4'>Payment Gateway</span>
                                </h3>
                                <ul className='font-mullish text-xl leading-10 font-bold max-w-[500px]'>
                                    <li className=' space-x-2 flex '>
                                    <Check className='mt-2 mr-2 text-lightBlue' />
                                        100+ Payments methods
                                    </li>
                                    <li className=' space-x-2 flex'>
                                    <Check className='mt-2 mr-2 text-lightBlue' />
                                        Industry leading success rates
                                    </li>
                                    <li className=' space-x-2 flex'>
                                    <Check className='mt-2 mr-2 text-lightBlue' />
                                        Superior Checkout experience
                                    </li>
                                    <li className=' space-x-2 flex'>
                                    <Check className='mt-2 mr-2 text-lightBlue' />
                                        Easy to integrate
                                    </li>
                                </ul>
                                <div className='flex items-center pl-5 space-x-4'>
                                    <NavLink className={'text-white  px-4 py-1 border border-lightBlue rounded-md bg-lightBlue'}>
                                        Sign Up Now
                                    </NavLink>
                                    <NavLink className={'underline text-lightBlue'}>
                                        Know More
                                    </NavLink>
                                </div>
                            </div>
                            <div>{/** inner Right div */}
                                <img className='' src={image} alt="side image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-slate-50 relative '>
                <div className='w-11/12 mx-auto  max-w-[1080px] '>
                    <div className=''>

                        <div className=''>

                        </div>
                        <div className=''>

                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Home