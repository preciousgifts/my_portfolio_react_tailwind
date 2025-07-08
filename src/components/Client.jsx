import React from 'react'

const Client = () => {
  return (
    <div className='flex items-center flex-col gap-12 pt-14 pb-6 text-5x1 text-white bg-black '>
        <div>
            <h1 className='text-4xl font-semibold tracking-tight text-balance sm:text-5xl'>My Clients</h1>
        </div>
        <div>
            <p className='w-3xl text-xl items-center text-center'>I have had the opportunity to work with a diverse group of companies.<br/> Some of the notable companies I have worked with includes </p>
        </div>

        <div className='flex flex-wrap gap-6'>
            <div className='border-2 border-s-2 rounded-2xl h-20 items-center flex justify-center w-52'>
                <h2 className='font-bold text-4xl text-amber-100'>Walmart</h2>
            </div>
            <div className='border-2 border-s-2 rounded-2xl h-20 items-center flex justify-center w-52'>
                <h2 className='font-bold text-4xl text-red-500'>Adobe</h2>
            </div>
            <div className='border-2 border-s-2 rounded-2xl h-20 items-center flex justify-center w-52'>
                <h2 className='font-bold text-4xl text-cyan-600'>Microsoft</h2>
            </div>
            <div className='border-2 border-s-2 rounded-2xl h-20 items-center flex justify-center w-52'>
                <h2 className='font-bold text-4xl text-blue-400'>Facebook</h2>
            </div>
        </div>
      
    </div>
  )
}

export default Client
