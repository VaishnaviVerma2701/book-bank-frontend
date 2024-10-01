import React from 'react'
import Navbar from '../Navbar'
import Course from "../Course"
import Footer from '../Footer'

function Courses() {
  return (
    <div>
        <Navbar/>
        <div className='min-h-screen'>
        <Course/>
        </div>
        <Footer/>
        
    </div>
  )
}

export default Courses