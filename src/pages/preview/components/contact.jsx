import React from 'react'

const Contact = () => {
  return (
    <div id='Contact' className='p-4 lg:p-20 flex flex-col items-center justify-center bg-slate-900'>
      <h1 className='text-[#735F32] uppercase font-semibold text-3xl mb-8'>Contact Me</h1>
      <form action="" className='flex flex-col w-full max-w-2xl'>
        <div className='flex flex-col lg:flex-row gap-4 mb-4'>
          <input 
            className='flex-1 rounded-lg bg-slate-800 p-4 border-2 border-[#735F32] text-slate-300 placeholder-slate-500'
            placeholder='Enter Your Name'
            type="text"
          />
          <input 
            className='flex-1 rounded-lg bg-slate-800 p-4 border-2 border-[#735F32] text-slate-300 placeholder-slate-500'
            placeholder='Enter Your Email'
            type="email"
          />
        </div>
        <textarea 
          className='w-full mb-4 rounded-lg bg-slate-800 p-4 border-2 border-[#735F32] text-slate-300 placeholder-slate-500'
          placeholder='Write Your Message ...'
          rows="6"
        ></textarea>
        <button 
          className='neno-button shadow-xl hover:bg-[#735F32] transition-colors duration-300 rounded-lg bg-slate-800 p-4 border-2 border-[#735F32] text-white self-center px-8'
          type="submit"
        >
          SUBMIT
        </button>
      </form>
    </div>
  )
}

export default Contact