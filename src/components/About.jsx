import React from 'react'
import { Square3Stack3DIcon } from '@heroicons/react/16/solid'
import app_dev from '../assets/app.png'
import web_dev from '../assets/web-development.png'
import ui_ux from '../assets/ui.png'
import data_sci from '../assets/overfitting.png'

function About() {
  return (
    <div className='bg-black text-white flex flex-col gap-12 items-center  pt-14 pb-6 '>
        <h1 className='text-4xl font-semibold tracking-tight text-balance sm:text-5xl'>What I do</h1>
        <p className='w-3xl text-xl items-center text-center'>I am a skilled and passionate web designer with experience in creating visually appealing and user friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript as well as design software such as Adobe Photoshop and illustrator</p>

        <div className='w-3xl'>
            <div className='bg-gray-800 px-12 py-12 justify-center items-center flex gap-7 rounded-2xl'>
                <div className="icon size-14">
                    <img src={ui_ux} alt="" className='size-14'/>
                </div>
                <div className="details flex flex-col gap-3.5">
                    <h1 className='text-3xl'> UI/UX design</h1>
                    <p>This is a demo text, you can write your own contact here</p>
                </div>
            </div>
        </div>

        <div className='w-3xl'>
            <div className='bg-gray-800 px-12 py-12 justify-center flex gap-7 items-center rounded-2xl'>
                <div className="icon h-14">
                    <img src={web_dev} alt="" className='size-14 '/>
                </div>
                <div className="details flex flex-col gap-3.5">
                    <h1 className='text-3xl'> Web Design</h1>
                    <p>This is a demo text, you can write your own contact here. <br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>

        <div className='w-3xl'>
            <div className='bg-gray-800 px-12 py-12 justify-center flex gap-7 items-center rounded-2xl'>
                <div className="icon h-14">
                    <img src={app_dev} alt="" className='size-14'/>
                </div>
                <div className="details flex flex-col gap-3.5">
                    <h1 className='text-3xl'>App design</h1>
                    <p>This is a demo text, you can write your own contact here</p>
                </div>
            </div>
        </div>

        <div className='w-3xl'>
            <div className='bg-gray-800 px-12 py-12 justify-center flex gap-7 items-center rounded-2xl'>
                <div className="icon h-14">
                    <img src={data_sci} alt="" className='size-14'/>
                </div>
                <div className="details flex flex-col gap-3.5">
                    <h1 className='text-3xl'>AI/ML</h1>
                    <p>This is a demo text, you can write your own contact here. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi?</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default About
