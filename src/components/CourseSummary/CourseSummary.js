import React from 'react';
import { FaStar, FaUsers } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CourseSummary = ({ course }) => {
   const { title, _id, rating, details, price, instructor, image_url, course_overview } = course
   return (

      <div>
         <div className="card lg:w-2/3 md:w-4/5 sm:w-11/12 bg-base-100 shadow-xl mx-auto my-8">
            <Link to={`/course/${_id}`}>
               <figure>
                  <img src={image_url} alt="Shoes" />
               </figure>

               <div className="card-body">
                  <h2 className="card-title font-bold text-4xl">{title}
                     <div className="badge badge-secondary">{rating?.badge}
                     </div>
                  </h2>
                  <p className='text-lg'>{details}</p>
                  <p className='lg:truncate ... md:truncate ...'>
                     <span className='font-semibold'>Course Overview:</span> {course_overview}
                  </p>
                  <div className='flex justify-center items-center mt-2'>
                     <img src={instructor?.img} alt="Instructor img" className='h-12 rounded-full mr-2' />
                     <p>
                        {instructor?.name}
                     </p>
                     <ul className='flex items-center'>
                        <li className='mx-2 text-warning yellow-400'><FaStar></FaStar></li>
                        <li className=''> {rating.number}</li>
                        <li className='mx-2'><FaUsers></FaUsers></li>
                        <li>({rating?.review})</li>
                     </ul>
                  </div>
                  <div className="mt-2">
                     <p className='font-semibold my-2'>
                        Price: ${price}
                     </p>
                     <div className='flex justify-between'>
                        <Link to={`/checkout/${_id}`}><button className="btn btn-primary mt-2">Get Premium Access</button></Link>
                        <button className='btn btn-primary'>Course Details</button>
                     </div>
                  </div>
               </div>
            </Link>
         </div>
      </div>

   );
};

export default CourseSummary;