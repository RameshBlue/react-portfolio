import React, { useState } from 'react'
import MyImage from '../assets/MyImage.png'
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import {Link} from 'react-scroll'

const Links = [
    {
        id: 1,
        name: "HOME"
    },
    {
        id: 2,
        name: "ABOUT"
    },
    {
        id: 3,
        name: "PROJECTS"
    },
    {
        id: 4,
        name: "CONTACT"
    },
]

function Navbar() {

    const [nav, setNav] = useState(false);

    return (
        <div className='fixed left-0 top-0 w-full bg-white py-6 px-6 sm:px-12 flex justify-between items-center z-20 shadow-md'>

            <div className='flex items-center gap-4'>
                <div className='relative w-14 h-14 rounded-full overflow-hidden'>
                    <img src={MyImage} className='absolute top-0 left-[-85px] w-[220px] max-w-none h-fit' alt="myImage" />
                </div>
                <div className='text-gray-700 font-bold text-lg cursor-pointer hover:text-yellow-400 duration-300'>RAMESH KRISHNAN</div>
            </div>

            <div className='xs:hidden md:flex gap-6'>
                {
                    Links.map((link) => {
                        return (
                            <Link key={link.id} to={link.name} smooth={true} offset={link.name == "CONTACT" ? -100 : -120} className='font-bold text-md px-4 text-gray-700 cursor-pointer hover:text-yellow-400 duration-300'>{link.name}</Link>
                        )
                    })
                }
            </div>

            <div className='xs:block md:hidden' onClick={() => { setNav(!nav) }}>
                {
                    nav ? <AiOutlineClose className=' text-gray-800 cursor-pointer' size={26} /> : <GiHamburgerMenu className=' text-gray-800 cursor-pointer' size={26} />
                }
            </div>

            {
                nav &&
                <div className='xs:block md:hidden absolute flex flex-col left-0 top-0 mt-[100px] w-full shadow-lg  bg-white z-10'>
                    {
                        Links.map((link) => {
                            return (
                                <div key={link.id} className={`font-bold text-[15px] px-6 py-6 ${link.id === 1 && 'border-t border-t-gray-300'} border-b border-solid border-b-gray-300 text-gray-700 cursor-pointer hover:text-yellow-400 duration-300`}>{link.name}</div>
                            )
                        })
                    }
                </div>
            }

        </div>
    )
}

export default Navbar