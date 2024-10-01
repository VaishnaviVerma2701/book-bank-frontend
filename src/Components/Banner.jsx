import React, { useState } from 'react'
import banner from "./banner.webp"
import axios from 'axios'

function Banner() {

  const [email, setEmail] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the backend server
      const res = await axios.post('http://localhost:4001/api/send-email', {
        email, 
      });

      setResponse(res.data.message);
    } catch (error) {
      console.error('Error sending email:', error);
      setResponse('Failed to send email');
    }
  };
 
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-5">
      <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32' >
        <div className='space-y-11'>
          <h1 className='text-3xl font-bold'> Hello , welcome here to learn something <span className='text-pink-500'>new everyday !!!</span> </h1>
          <p className='text'>Books are windows to infinite worlds, offering journeys of the mind and soul without leaving your chair. They are timeless companions that ignite curiosity and inspire growth."</p>
          
          <form action="" onSubmit={handleSubmit} method='dialog'>
          <label className="input input-bordered flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70 text-black">
                    <path
                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path
                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="grow" placeholder=" Enter Your Email" 
                onChange={(e) => setEmail(e.target.value)}
                />
          </label>
          <button className="btn mt-6 btn-secondary ">Secondary</button>
          </form>
          {response && <p className='mt-4'>{response}</p>}
          </div>   
      </div>

        <div className='  mx-0 order-1 w-full md:w-1/2'>
         <img src={banner} className=" mx-16  w-[200px] md:w-[390px] h-70 mt-20  md:ml-25 dark:bg-slate-900" alt="" />
        </div>
    </div>
    </>
  )
}

export default Banner