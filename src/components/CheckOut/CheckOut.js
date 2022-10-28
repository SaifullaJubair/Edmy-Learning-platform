import React from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';

const handleBuy = () => {
   toast.success('Congratulation! Course Purchase Successfully    ')
}
const CheckOut = () => {
   const course = useLoaderData()
   const { title, price, instructor, image_url, details } = course
   console.log(course);
   return (
      <div className=''>
         <h1 className=' text-3xl font-semibold mt-10 ml-20 mb-8'>For Premium access , Purchase Now ! </h1>
         <div className='min-h-[48vh] ml-40'>
            <div className="card w-96 bg-base-100 shadow-xl image-full ">
               <figure><img src={image_url} /></figure>
               <div className="card-body">
                  <h2 className="card-title text-2xl font-semibold" >{title}</h2>
                  <p className='text-sm'>{details}</p>
                  <p>Your Instructor: {instructor.name}</p>
                  <p className='text-xl'>Price: {price}$</p>
                  <div className="card-actions justify-end">
                     <button className="btn btn-primary" onClick={handleBuy}>Purchase Now</button>
                  </div>
               </div>
            </div>
         </div>

      </div>
   );
};

export default CheckOut; <h1>This is checkout page</h1>