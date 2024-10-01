import React, { useEffect, useState } from 'react'
// import List from "./List.json"
import Card from './Card'
import axios from "axios"
import { Link } from 'react-router-dom'
function Course() {
   const[book,setBook]=useState([])
   useEffect(()=>{
     const getBook=async()=>{
        try {
         const res = await axios.get("http://localhost:4001/book")   // we take the data from backend
         console.log(res.data);
         setBook(res.data)
        } 
        catch (error) {
            console.log(error);
        }
     }
     getBook();
   },[])
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  pt-1'>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl  md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here !:)</span> </h1>
            <p className='mt-12'>Immerse yourself in our book-based courses, where every chapter is a step toward deeper understanding and personal growth. Guided by the words of renowned authors, these courses blend literature with practical insights. Unlock new perspectives and let books become your path to knowledge!"</p>
            <Link to="/">
            <button className= " mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
            </Link>
        </div>
        <div className='mt-4 grid grid-cols-1 md:grid-cols-3  gap-6 px-2'>
            {
                book.map((item)=>(
                    <Card key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Course