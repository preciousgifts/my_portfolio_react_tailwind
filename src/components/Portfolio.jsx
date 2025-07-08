import React from 'react'
import Port_1 from '../assets/port-1.jpg'
import Port_2 from '../assets/port-2.jpg'
import Port_3 from '../assets/port-3.jpg'
import Port_4 from '../assets/port-4.jpg'
import Port_5 from '../assets/port-5.jpg'
import Port_6 from '../assets/port-6.jpg'

const Portfolio = () => {
  return (
    <div className='flex items-center flex-col gap-12 pt-14 pb-6 text-5x1 text-white bg-black '>
        <div className='justify-center'>
            <h1 className='text-4xl font-semibold tracking-tight text-balance sm:text-5xl'>My Portfolio</h1>
        </div>

        <div>
            <p className='w-3xl text-xl items-center text-center'> I take pride in apying attention to the smallest details and making sure that my work is pixel perfet. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence</p>
        </div>

        <div className='flex gap-10 flex-wrap md:flex-3/4 px-24 justify-center'>
            <div className='w-full sm:w-64 h-96 mt-5 border-2 border-amber-100 rounded-2xl'>
                <img src={Port_1} alt="" className='rounded-2xl'/>
            </div>

            <div className="w-full sm:w-64 h-96 mt-5 border-2 border-amber-100 rounded-2xl">
                <img src={Port_2} alt="" className='rounded-2xl' />
            </div>

            <div className="w-full sm:w-64 h-96 mt-5 border-2 border-amber-100 rounded-2xl">
                <img src={Port_3} alt="" className='rounded-2xl'/>
            </div>

            <div className="w-full sm:w-64 h-96 mt-5 border-2 border-amber-100 rounded-2xl">
                <img src={Port_4} alt="" className='rounded-2xl'/>
            </div>
            <div className="w-full sm:w-64 h-96 mt-5 border-2 border-amber-100 rounded-2xl">
                <img src={Port_5} alt="" className='rounded-2xl' />
            </div>
            <div className="w-full sm:w-64 h-96 mt-5 border-2 border-amber-100 rounded-2xl">
                <img src={Port_6} alt="" className='rounded-2xl' />
            </div>        
        </div>    
    </div>
  )
}

export default Portfolio
