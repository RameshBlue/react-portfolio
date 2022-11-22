import React from 'react'
import { Link } from 'react-scroll'

const Skills = ["HTML", "CSS", "SASS", "Tailwind CSS", "Bootstrap", "Javascript", "Typescript", "React", "GIT", "Responsive Design"]

function About() {
    return (
        <div id='ABOUT' className='flex flex-col items-center gap-20 mb-[100px]'>

            <div className='flex flex-col items-center text-center gap-6 max-w-[800px] w-[90%]'>
                <div className='flex flex-col items-center gap-1'>
                    <h1>ABOUT ME</h1>
                    <div className='w-16 h-[6px] rounded-l-full rounded-r-full bg-yellow-400'></div>
                </div>
                <h4>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</h4>
            </div>

            <div className='flex flex-col md:flex-row gap-16 md:gap-28 justify-center max-w-[1200px] w-[90%]'>
                <div className='flex flex-col items-start gap-6 w-[90%] md:w-[50%]'>
                    <h2>Get to know me!</h2>
                    <div className='flex flex-col gap-3'>
                        <p>
                            I'm a <span className='font-bold'> Frontend React Developer </span>   building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <span className='font-bold'> Projects </span>section.

                        </p>

                        <p>
                            I'm quietly confident, naturally curious, and perpetually working on improving myself. I like to code things from scratch, and enjoy bringing ideas to life in the browser.
                        </p>

                        <p>
                            I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <span className='font-bold'> contact </span> me.
                        </p>

                    </div>

                    <Link to='CONTACT' smooth={true} offset={-100} className='button'>CONTACT</Link>
                </div>

                <div className='flex flex-col gap-6 w-[90%] md:w-[50%]'>
                    <h2>My Skills</h2>
                    <div className='flex flex-wrap gap-4'>
                        {
                            Skills.map((skill, index) => {
                                return (
                                    <div key={index} className='px-4 py-2 rounded-md bg-[#8a8a8a43] text-gray-600 font-semibold'>{skill}</div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About