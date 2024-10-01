import React from 'react'
// import Navbar from "./Components/Navbar"
// import Banner from "./Components/Banner"
// import Footer from "./Components/Footer"
// import Freebook from './Components/Freebook'
import Home from './Components/Home/Home'
import Courses from "./Components/Courses/Courses"
import {Routes,Route, Navigate} from "react-router-dom"
import Signup from './Components/Signup'
import {Toaster} from "react-hot-toast"
import Login from './Components/Login'
import { useAuth } from './context/AuthProvider'
import Contact from './Components/Contact'
function App() {
  const  [authUser, setAuthUser]=useAuth()
 console.log(authUser)
  return (
    <div >
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/courses" element={ authUser?<Courses/>:<Navigate to= "/signup"/>}/>
      <Route  path="/signup" element={<Signup/>}/>
      <Route  path="/login" element={<Login/>}/>
      <Route  path="/contact" element={<Contact/>}/>
    </Routes>
    <Toaster/>
    </div>
  )
}

export default App