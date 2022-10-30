import React from 'react'
import {motion} from 'framer-motion'

function Home() {
    return (
        <div className='relative flex justify-center items-center bg-hero-pattern min-h-screen h-[700px] px-10 mb-[100px]'>

            <div className='absolute left-0 top-0 bg-gradient-to-b from-gray-200 via-gray-100 to-gray-50 h-full w-full opacity-80'></div>

            <div className='flex flex-col items-center gap-10 z-[5]'>

                <div className='font-bold text-center text-[35px] sm:text-[50px] md:text-[65px] text-gray-900' style={{ letterSpacing: '3px' }}>HEY, I'M RAMESH KRISHNAN</div>
                <div className='text-center text-[19px] sm:text-[22px] max-w-3xl'>A Frontend React Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</div>
                <div className='button text-xl px-16 py-4'>PROJECTS</div>

                <div className='absolute bottom-[24px] border-[2px] border-gray-600 w-7 h-12 rounded-t-full rounded-b-full'>
                    <motion.div initial = {{opacity: 1, y: 3}} animate = {{opacity : 0, y: 35}} transition = {{duration : 1.5, repeat: Infinity}} className='absolute left-[35%] top-0 bg-gray-600 w-2 h-2 rounded-full' />
                </div>

            </div>

        </div>
    )
}

export default Home