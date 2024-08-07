import React from 'react';

const Contact = () => {
  return (
    <div id='Contact' className='p-8 flex flex-col items-center justify-center bg-gradient-to-b from-gray-700 to-gray-800'>
      <h1 className='text-yellow-400 uppercase font-semibold text-3xl mb-8'>Contact Me</h1>
      <form action="" className='flex flex-col w-full max-w-2xl'>
        <div className='flex flex-col md:flex-row gap-4 mb-4'>
          <input 
            className='flex-1 rounded-lg bg-gray-900 p-4 border-2 border-gray-700 text-gray-300 placeholder-gray-500'
            placeholder='Enter Your Name'
            type="text"
          />
          <input 
            className='flex-1 rounded-lg bg-gray-900 p-4 border-2 border-gray-700 text-gray-300 placeholder-gray-500'
            placeholder='Enter Your Email'
            type="email"
          />
        </div>
        <textarea 
          className='w-full mb-4 rounded-lg bg-gray-900 p-4 border-2 border-gray-700 text-gray-300 placeholder-gray-500'
          placeholder='Write Your Message ...'
          rows="6"
        ></textarea>
        <button 
          className='shadow-lg hover:bg-yellow-400 transition-colors duration-300 rounded-lg bg-yellow-300 p-4 border-2 border-yellow-300 text-gray-900 self-center px-8'
          type="submit"
        >
          SUBMIT
        </button>
      </form>
    </div>
  )
}

export default Contact;
