import {ChevronRight} from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/white.png'

const Header = () => {
  return (
    <nav className=' w-full bg-deepblue items-center justify-center '> {/** Main  Div */}
      <div className='flex justify-between  items-center '> {/** center div contains 2 divs*/}
        <div className='flex items-center justify-between  '> { /**first div  contains 2 more divs  */}
          <div className=' text-white font-mullish'>{/** This (A) div contains Home link */}
            <NavLink
            className={'font-bold '}
              to='/' >
             <img className=' ml-10  pb-1 w-24' src={logo} alt="Logo" />
            </NavLink>
          </div>
        </div>
        <div className='flex items-center flex-row gap-4 '> {/** This (B)  div contains other pages links */}
          <div className='relative group'>
            <div className='text-white font-mullish py-7 hover:text-lightBlue  transition-all duration-200 '>
              <NavLink to='/payments'>
                Payments
              </NavLink>
            </div>
            <div className='absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block  transition-all duration-200'> {/** Hover under line  */}
            </div>
          </div>
          <div className='relative group'>
            <div className='text-white font-mullish py-7 hover:text-lightBlue  transition-all duration-200 '>
              <NavLink to='/payments'>
                Banking
              </NavLink>
            </div>
            <div className='absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block  transition-all duration-200'> {/** Hover under line  */}
            </div>
          </div>
          <div className='relative group'>
            <div className='text-white font-mullish py-7 hover:text-lightBlue  transition-all duration-200 '>
              <NavLink to='/payments'>
                Corporate Card
              </NavLink>
            </div>
            <div className='absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block  transition-all duration-200'> {/** Hover under line  */}
            </div>
          </div>
          <div className='relative group'>
            <div className='text-white font-mullish py-7 hover:text-lightBlue  transition-all duration-200'>
              <NavLink to='/payments'>
                Payroll
              </NavLink>
            </div>
            <div className='absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block  transition-all duration-200'> {/** Hover under line  */}
            </div>
          </div>
          <div className='relative group'>
            <div className='text-white font-mullish py-7 hover:text-lightBlue  transition-all duration-200'>
              <NavLink to='/payments'>
                Resources
              </NavLink>
            </div>
            <div className='absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block  transition-all duration-200'> {/** Hover under line  */}
            </div>
          </div>
          <div className='relative group'>
            <div className='text-white font-mullish py-7 hover:text-lightBlue  transition-all duration-200'>
              <NavLink to='/payments'>
                Support
              </NavLink>
            </div>
            <div className='absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block  transition-all duration-200'> {/** Hover under line  */}
            </div>
          </div>
          <div className='relative group'>
            <div className='text-white font-mullish py-7 hover:text-lightBlue  transition-all duration-200 '>
              <NavLink to='/payments'>
                Pricing
              </NavLink>
            </div>
            <div className='absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block  transition-all duration-200'> {/** Hover under line  */}
            </div>
          </div>
        </div>
        <div className='flex flex-row gap-6 pr-7'>{ /**Second  div  contains auths pages  */}
      
          <NavLink 
          to='/login'
          className='font-mullish text-white font-bold text-sm px-5 py-3 border-lightBlue border rounded-sm'>
            Login
          </NavLink>
      
          <div className=' flex px-3 py-3 gap-1 bg-white  text-sm font-mullish font-bold text-lightBlue300 rounded-sm  transition-all duration-200  hover:text-lightBlue500 hover:cursor-pointer'>
           sign up <ChevronRight /> 
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
