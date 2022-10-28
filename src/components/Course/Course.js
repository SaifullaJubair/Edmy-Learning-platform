import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaClock, FaLightbulb, FaStar, FaUsers } from "react-icons/fa";
import { BsFillCaretRightSquareFill } from "react-icons/bs";

import { Link } from 'react-router-dom';

const Course = () => {
   const course = useLoaderData()
   const { title, _id, rating, details, price, instructor, image_url, course_overview, course_time, video, quiz, exam, enrolled } = course
   return (
      <div>
         <h1 className='text-center text-4xl text-semibold'>Course Details</h1>

         <div className="card lg:w-4/5 sm:w-11/12 bg-base-100 shadow mx-auto my-4">
            <figure>
               <img src={image_url} alt="Shoes" />
            </figure>

            <div className="card-body">
               <h2 className="card-title font-bold lg:text-5xl md:text-4xl sm:text-3xl">{title}
                  <span className="badge badge-secondary">{rating?.badge}
                  </span>
               </h2>
               <p className='text-lg'>{details}</p>
               <p className='font-semibold text-2xl mt-3'>Course Overview:</p>
               <p className=''>
                  {course_overview}
               </p>
               <div className='flex justify-center items-center my-4'>
                  <img src={instructor?.img} alt="Instructor img" className='h-16 rounded-full mr-2' />
                  <p className='font-semibold text-lg'>
                     {instructor?.name}
                  </p>
               </div>

               <ul className='flex items-center  mb-3'>
                  <li className='mx-2 text-warning yellow-400'><FaStar></FaStar></li>
                  <li className=''> {rating.number}</li>
                  <li className='mx-2'><FaUsers></FaUsers></li>
                  <li>({rating?.review})</li>
               </ul>
               <div className='ml-2'>
                  <ul className='flex items-center'>
                     <li><BsFillCaretRightSquareFill></BsFillCaretRightSquareFill></li>
                     <li className='ml-2'>Videos: <span className='font-semibold'> {video}</span> </li>
                  </ul>
                  <ul className='flex items-center mt-2'>
                     <li><FaClock></FaClock></li>
                     <li className='ml-2'>Time Required: <span className='font-semibold'>{course_time} hours</span> </li>
                  </ul>
                  <ul className='flex items-center mt-2'>
                     <li><FaLightbulb></FaLightbulb></li>
                     <li className='ml-2'>Quiz:  <span className='font-semibold'>{quiz}</span> </li>
                  </ul>
                  <ul className='flex items-center mt-2'>
                     <li className='mr-2'>Total Exam: <span className='font-semibold'>{exam}</span> </li>
                  </ul>
                  <ul className='my-2'>
                     <li>Total Enrolled: <span className='font-bold'>({enrolled})</span> Lerner's </li>
                     <li className='my-2'>Last Update: {instructor.published_date}</li>
                     <li className='font-semibold my-2 text-xl'>
                        Price: ${price}
                     </li>
                  </ul>
                  <div className="mt-2">

                     <Link to='/checkout'><button className="btn btn-primary mt-2">Buy Now</button></Link>
                  </div>
               </div>
            </div>
         </div>

      </div>


   );
};

export default Course;