import React from 'react'

const Home = () => {
  return (
    <div>
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
    </div>
  )
}

export default Home
