import React from 'react';
import { FaStar, FaUsers } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CourseSummary = ({ course }) => {
   const { title, _id, rating, details, price, instructor, image_url, course_overview } = course
   return (

      <div>
         <Link to={`/course/${_id}`}>
            <div className="card w-3/4 bg-base-100 shadow-xl mx-auto my-4">
               <figure>
                  <img src="https://img.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg?w=1060&t=st=1666782419~exp=1666783019~hmac=d0fe22544ddcffe298af325818ca533914a0fc643839a514078f77d2c713d128" alt="Shoes" />
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
                     <Link to='/checkout'><button className="btn btn-primary mt-2">Buy Now</button></Link>
                  </div>
               </div>
            </div>
         </Link>
      </div>

   );
};

export default CourseSummary;