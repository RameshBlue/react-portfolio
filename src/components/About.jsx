import React from 'react'
import Button from './Button'

const Skills = ["HTML", "CSS", "SASS", "Tailwind CSS", "Bootstrap", "Javascript", "Typescript", "React", "GIT", "Responsive Design"]

function About() {
    return (
        <div className='flex flex-col items-center gap-20 mb-[100px]'>

            <div className='flex flex-col items-center text-center gap-6 max-w-[800px] w-[90%]'>
                <h1>ABOUT ME</h1>
                <div className='w-10 h-[6px] rounded-l-full rounded-r-full bg-yellow-400'></div>
                <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
            </div>

            <div className='flex gap-28 justify-center max-w-[1200px] w-[90%]'>
                <div className='flex flex-col items-start gap-6 w-[50%]'>
                    <h2>Get to know me!</h2>
                    <p className='text-lg'>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.

                        I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming

                        I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                    </p>
                    <div className='button'>CONTACT</div>
                </div>

                <div className='flex flex-col gap-6 w-[50%]'>
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