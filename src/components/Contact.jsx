import React, { useState } from 'react'

function Contact() {

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div id='CONTACT' className='relative flex flex-col items-center bg-hero-pattern gap-20 py-[100px]'>

            <div className='absolute left-0 top-0 bg-gradient-to-b from-gray-200 via-gray-100 to-gray-50 h-full w-full opacity-70'></div>

            <div className='flex flex-col items-center text-center gap-6 max-w-[700px] w-[90%] z-10'>
                <div className='flex flex-col items-center gap-1'>
                    <h1>CONTACT</h1>
                    <div className='w-16 h-[6px] rounded-l-full rounded-r-full bg-yellow-400'></div>
                </div>
                <h4>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</h4>
            </div>

            <form className='flex flex-col bg-white rounded shadow-lg p-6 z-10 max-w-[800px] w-[90%]' onSubmit={(evt) => {
                evt.preventDefault();
                window.location = `mailto:rameshkrishnan109@gmail.com?subject=New message from Portfolio website&body=Hi it's ${name}, %0D%0D${message}`
            }}>
                <label htmlFor='name' className='text-[16px] text-gray-600 font-semibold mb-3'>Name</label>
                <input name='name' type='text' placeholder='Enter Your Name' required className='input' onChange={(evt) => { setName(evt.target.value) }}></input>

                <label htmlFor='message' className='text-[16px] text-gray-600 font-semibold mb-2'>Message</label>
                <textarea name='message' placeholder='Enter Your Message' rows="10" required className='input resize-none' onChange={(evt) => { setMessage(evt.target.value) }}></textarea>

                <input type='submit' className='button self-end px-20 py-3 mt-2 text-gray-700' />
            </form>
        </div>
    )
}

export default Contact