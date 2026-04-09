import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='w-full flex flex-col justify-center items-center bg-gray-200 pt-[60px] '>
      <div className='text-4xl font-bold'>Get in touch</div>
      <form className='flex flex-col justify-center items-center gap-4 w-full m-10 px-[20px] '>
        <div>
          <label htmlFor="name">Name: </label>
          <input id="firstName" placeholder='John Snow' className='bg-amber-400' />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input id="email" name='email' type='email' placeholder='example@email.com' />
        </div>
        <div>
          <label htmlFor="message" >Message: </label>
          <textarea placeholder='How you doin?' name="message" id="message" className='h-50 mb-10' />
        </div>
        <button className=' bg-(--green) px-16 py-4 w-fit justify-center md:mt-10 rounded-sm' type='Submit' id='submit' >Submit</button>
      </form>
    </section>
  )
}

export default Contact