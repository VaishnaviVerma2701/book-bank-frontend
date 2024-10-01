import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

function Logout() {
    const [authUser , setAuthUser]= useAuth()
    const handlelogout =()=>{
        try{
            setAuthUser({
            ...authUser,
            user:null
            })
            localStorage.removeItem("Users")
            toast.success("Logout Succefully")
            setTimeout(()=>{
                window.location.reload(); // after logout ourpage is reload
              },2000)
             
        }
        catch(error){
       toast.error("Error"+error.message)
       setTimeout(()=>{},2000)
        }
    }
  return (
    <div>
      <button className='px-3 py-2 bg-red-500 cursor-pointer rounded-md'
      onClick={handlelogout}
      >
        Logout</button>
    </div>
  )
}

export default Logout
