import React from 'react';
import Navbar from './Navbar';
import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from 'react-hook-form';


function Contact() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = async (data) => {
        const userInfo = {
          fullname: data.fullname,
          email: data.email,
         phone:data.phone,
         city:data.city,
         address:data.address,
         book:data.book

        };

        await axios
        .post("http://localhost:4001/user/contact", userInfo)
        .then((res) => {
          console.log(res.data);
          if (res.data) {
            toast.success("Signup Successfully");
           
          }
          localStorage.setItem("Users", JSON.stringify(res.data.user));
        })
        .catch((err) => {
          if (err.response) {
            console.log(err);
            toast.error("Error: " + err.response.data.message);
          }
        });
    }

  return (
    <>
      <Navbar />

      <div className="contact mt-24  md:mt-16 px-4 md:px-32 py-8 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-center text-2xl md:text-4xl font-bold text-red-500 mb-8">
          Feel Free to Contact Me
        </h1>

        <div>
          <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6" onClick={handleSubmit(onSubmit)}>
            <label className="flex flex-col text-gray-700">
              <span className="mb-2">Full Name</span>
              <input
                type="fullname"
                placeholder="Enter the Name"
                className="p-3 rounded border border-gray-300 text-center focus:outline-none focus:border-red-500"
                {...register("fullname", { required: true })}
              />
              {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
            </label>
            <label className="flex flex-col text-gray-700">
              <span className="mb-2">Email Address</span>
              <input
                type="email"
                placeholder="Enter the Email"
                className="p-3 rounded border border-gray-300 text-center focus:outline-none focus:border-red-500"
                {...register("email", { required: true })}
              />
              {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
            </label>
            <label className="flex flex-col text-gray-700">
              <span className="mb-2">Phone Number</span>
              <input
                type="phone"
                placeholder="Enter the Phone Number"
                className="p-3 rounded border border-gray-300 text-center focus:outline-none focus:border-red-500"
                {...register("phone", { required: true })}
              />
              {errors.phone && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
            </label>
            <label className="flex flex-col text-gray-700">
              <span className="mb-2">City</span>
              <input
                type="city"
                placeholder="Enter the City"
                className="p-3 rounded border border-gray-300 text-center focus:outline-none focus:border-red-500"
                {...register("city", { required: true })}
              />
            </label>
            <label className="flex flex-col text-gray-700">
              <span className="mb-2">Address</span>
              <input
                type="address"
                placeholder="Enter the Address"
                className="p-3 rounded border border-gray-300 text-center focus:outline-none focus:border-red-500"
                {...register("address", { required: true })}
              />
              {errors.address && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>)}
            </label>
            <label className="flex flex-col text-gray-700">
              <span className="mb-2">Book Name</span>
              
              <input
                type="book"
                placeholder="Enter the Book Name"
                className="p-3 rounded border border-gray-300 text-center focus:outline-none focus:border-red-500"
                {...register("book", { required: true })}
              />
               {errors.book && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>)}
            </label>
            <div className="text-center ">
            <button className="Btn bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300 md:ml-40">
              Submit
            </button>
          </div>
          </form>
          
        </div>
      </div>
    </>
  );
}

export default Contact;
