import React from 'react'

const Contact = () => {
  return (
    <div id='Contact' className='p-4 lg:p-20 flex-col items-center justify-center bg-slate-900'>

<h1 className='text-white uppercase font-semibold text-3xl'>Contact Me</h1>
<form action="" className='flex flex-col gap-2 lg:w-1/2'>
  <div className='lg:flex gap-6'>
<input className='w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-[#f50057] text-slate-500' placeholder='Enter Your Name' type="text" />
<input className='w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-[#f50057] text-slate-500' placeholder='Enter Your Email' type="text" />
 </div>
 <textarea className='w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-[#f50057] text-slate-500' placeholder='Write Your Message ...' name="" id="" cols= "30" rows="10"></textarea>
 <button className='neno-button shadow-xl hover:bg-[#f50057] my-3 rounded-lg bg-slate-800 p-4 border-2 border-[#f50057] text-white' type="submit"> SUBMIT</button>

</form>

    </div>
  )
}

export default Contact