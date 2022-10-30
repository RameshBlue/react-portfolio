import React, { useState } from 'react'
import MyImage from '../assets/MyImage.png'
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"

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
                <div className='w-14 h-14 bg-yellow-400 rounded-full'>
                    {/* <img src={MyImage} alt="myImage" /> */}
                </div>
                <div className='text-gray-700 font-bold text-xl cursor-pointer hover:text-yellow-400 duration-300'>RAMESH KRISHNAN</div>
            </div>

            <div className='xs:hidden md:flex gap-2'>
                {
                    Links.map((link) => {
                        return (
                            <div key={link.id} className='font-bold text-lg px-6 text-gray-700 cursor-pointer hover:text-yellow-400 duration-300'>{link.name}</div>
                        )
                    })
                }
            </div>

            <div className='xs:block md:hidden' onClick={() => { setNav(!nav) }}>
                {
                    nav ? <AiOutlineClose className=' text-gray-800 cursor-pointer' size={30} /> : <GiHamburgerMenu className=' text-gray-800 cursor-pointer' size={30} />
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