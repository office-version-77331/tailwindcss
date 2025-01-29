import React from 'react'

const Home = () => {
  return (
    <div className='h-screen'>
      <ul className='  mt-5 flex'>
        <li className='p-3  text-white bg-black'><a href="">Home</a></li>
        <li className='p-3  text-white bg-black'><a href="">Home</a></li>
        <li className='p-3  text-white bg-black'><a href="">Home</a></li>
        <li className='p-3  text-white bg-black'><a href="">Home</a></li>
      </ul>

      <br />
      <br />
      <div> {/** This div is almost  same but the clesses added in th grand child so is behave diff  u can see in code if u want to   */}
        <ul className=' bg-black  flex [&>*]:flex'>
          <li><a className='p-3  text-white bg-black' href="">Home</a></li>
          <li><a className='p-3  text-white bg-black' href="">Home</a></li>
          <li><a className='p-3  text-white bg-black' href="">Home</a></li>
          <li><a className='p-3  text-white bg-black' href="">Home</a></li>
        </ul>
      </div>


      <div className='bg-orange-500  w-1/4 h-1/4'>
        <h2>Hello width </h2>
      </div>
      <div className='bg-slate-500  w-1/4 min-h-56'>
        <h2>Hello width </h2>
      </div> {/**positions  */}
      <div className='bg-orange-600 relative  size-80'>
        <div className='bg-black absolute top-0 right-0 size-10'>
        </div>
        <div className='bg-gray-400 absolute top-0 left-0 size-10'>
        </div>
        <div className='bg-green-400 absolute bottom-0 right-0 size-10'>
        </div>
        <div className='bg-blue-300 absolute bottom-0 left-0 size-10'>
        </div>
      </div>
       <div className='bg-green-400 relative  size-96'>

        <div className='bg-slate-700  absolute inset-28 size-36'></div>
       </div>

       <div className='bg-emerald-400 mt-6 container '> {/** containers  */}
          <h2>Hello Buddy,  How are yuo </h2>
          <div className='bg-green-400 mt-5 h-24 '> container</div>
          <div className='bg-green-400 mt-5 h-24 '> container</div>
          <div className='bg-green-400 mt-5 h-24 '> container</div>
          <div className='bg-green-400 mt-5 h-24 '> container</div>
       </div>
 {/** Background classes  */}
       <div className={ ` h-96 bg-blue-900  bg-[url('/src/assets/rozarpay.png')] bg-no-repeat bg-center bg-contain`}>
          hello buddy 
       </div>
       {/** gradient background  */}
        <div className={`gradient h-60  bg-gradient-to-t to-orange-400 from-emerald-300 ` }>flex
          Hello Buddy 
        </div>
        <div className=' size-96  mx-auto my-3 shadow-orange-500 shadow-xl '></div>
        <div className=' size-96  mx-auto my-24 transition-all duration-300 hover:scale-50 hover:shadow-rose-400 shadow-orange-500 shadow-xl '></div> 

        <div className='bg-green-400 columns-1 sm:columns-2 lg:columns-3  pb-5 '>
        <div className='text-black font font-extrabold bg-white size-7'>div </div>
        <div className='text-black font font-extrabold bg-white size-7'>div </div>
        <div className='text-black font font-extrabold bg-white size-7'>div </div>
        <div className='text-black font font-extrabold bg-white size-7'>div </div>
        <div className='text-black font font-extrabold bg-white size-7'>div </div>
        <div className='text-black font font-extrabold bg-white size-7'>div </div>
        <div className='text-black font font-extrabold bg-white size-7'>div </div>
        <div className='text-black font font-extrabold bg-white size-7'>div </div>
        <div className='text-black font font-extrabold bg-white size-7'>div </div>
        <div className='text-black font font-extrabold bg-white size-7'>div </div>
        <div className='text-black font font-extrabold bg-white size-7'>div </div>
        <div className='text-black font font-extrabold bg-white size-7'>div </div>
        <div className='text-black font font-extrabold bg-white size-7'>div </div>
        <div className='text-black font font-extrabold bg-white size-7'>div </div>
        <div className='text-black font font-extrabold bg-white size-7'>div </div>
        <div className='text-black font font-extrabold bg-white size-7'>div </div>
        <div className='text-black font font-extrabold bg-white size-7'>div </div>
        <div className='text-black font font-extrabold bg-white size-7'>div </div>
        <div className='text-black font font-extrabold bg-white size-7'>div </div>
        <div className='text-black font font-extrabold bg-white size-7'>div </div>
        <div className='text-black font font-extrabold bg-white size-7'>div </div>
        <div className='text-black font font-extrabold bg-white size-7'>div </div>
        <div className='text-black font font-extrabold bg-white size-7'>div </div>
        <div className='text-black font font-extrabold bg-white size-7'>div </div>
        <div className='text-black font font-extrabold bg-white size-7'>div </div>
        <div className='text-black font font-extrabold bg-white size-7'>div </div>
        <div className='text-black font font-extrabold bg-white size-7'>div </div>
        <div className='text-black font font-extrabold bg-white size-7'>div </div>
        <div className='text-black font font-extrabold bg-white size-7'>div </div>
        <div className='text-black font font-extrabold bg-white size-7'>div </div>
        <div className='text-black font font-extrabold bg-white size-7'>div </div>
        <div className='text-black font font-extrabold bg-white size-7'>div </div>
         </div>

        <div className='bg-green-400 columns-sm pb-5 '>
        <h2 className='text-black  font-extrabold bg-white '>div </h2>
        <h2 className='text-black  font-extrabold bg-white '>div </h2>
        <h2 className='text-black  font-extrabold bg-white '>div </h2>
        <h2 className='text-black  font-extrabold bg-white '>div </h2>
        <h2 className='text-black  font-extrabold bg-white '>div </h2>
        <h2 className='text-black  font-extrabold bg-white '>div </h2>
        <h2 className='text-black  font-extrabold bg-white '>div </h2>
        <h2 className='text-black  font-extrabold bg-white '>div </h2>
        <h2 className='text-black  font-extrabold bg-white '>div </h2>
        <h2 className='text-black  font-extrabold bg-white '>div </h2>
        <h2 className='text-black  font-extrabold bg-white '>div </h2>
        <h2 className='text-black  font-extrabold bg-white '>div </h2>
        <h2 className='text-black  font-extrabold bg-white '>div </h2>
        <h2 className='text-black  font-extrabold bg-white '>div </h2>
        <h2 className='text-black  font-extrabold bg-white '>div </h2>
         </div>

        <div className=' bg-red-500 h-9 flex my-7 rounded-md transition-all duration-200 hover:size-16 items-center justify-center hover:cursor-pointer '>
          login
        </div>
        <div className='mt-5 flex gap-3 px-3 py-4  bg-black '>
          <button className='bg-amber-500 shadow rounded-sm px-3 py-2 transition-all duration-200  hover:bg-lime-500 hover:shadow-orange-300 text-white font-bold '>Login</button>
          <button className='bg-amber-500 rounded-sm px-3 py-2  transition-all duration-200 hover:scale-110 text-white font-bold '>Sign Up</button>
          <button className='bg-amber-500 rounded-sm px-3 py-2 transition-all duration-200  hover:scale-y-100 hover:scale-x-125  text-white font-bold '>Know more</button>
           </div>  
           <div className='bg-red-600 rounded-full size-10 shadow-lg mx-6  shadow-emerald-700 animate-bounce '>
             
           </div>
           <hr />
           <div className='bg-red-600 rounded-full h-10 w-10 shadow-lg mx-6  shadow-emerald-700 animate-spin '>
             
           </div>
           <hr />
           <div className='bg-red-600 rounded-full h-10 w-10   mx-6  shadow-emerald-700 animate-ping '>
             
           </div>
           <div className='mt-7 text-white  bg-deepblue   dark:bg-white dark:text-black font-bold '>twxt</div>
           <div className='px-4 '></div>
    </div>
  )
}

export default Home
