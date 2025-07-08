import React from 'react'
import Mypics from '../assets/my_pics.png'

const Home = () => {
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 bg-black md:h-[calc(100vh-4rem)] min-h-screen overflow-hidden">
      
      {/* Text Section */}
      <div className="text-white flex flex-col px-24 py-10 justify-center gap-4">
        <h3 className='text-3xl sm:text-4xl'>Hello,</h3>
        <h1 className='text-4xl sm:text-5xl font-bold'>I'm Olusayo</h1>
        <h1 className='text-4xl sm:text-5xl font-bold'>Full Stack <span className='text-yellow-400'>Developer</span></h1>
        <p className='text-base sm:text-2xl text-gray-300'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dicta impedit reiciendis animi officiis temporibus inventore illum. Corporis voluptatem placeat nulla illum assumenda suscipit corrupti, dignissimos cupiditate, incidunt error quod.
        </p>
        <button className='bg-white h-12 w-36 text-black border-2 rounded-full text-lg hover:bg-gray-300 transition'>
          Hire Me
        </button>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center h-full p-4">
        <img
          className="w-48 sm:w-64 md:w-80 lg:w-96 max-h-full object-contain"
          src={Mypics} 
          alt="Olusayo"
        />
      </div>

    </div>
  )
}

export default Home
