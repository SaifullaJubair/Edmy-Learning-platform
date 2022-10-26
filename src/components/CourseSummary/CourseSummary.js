import React from 'react';

const CourseSummary = ({ course }) => {
   const { title, _id, rating, details, price, instructor, image_url, course_overview } = course
   return (

      <div className="card w-3/4 bg-base-100 shadow-xl mx-auto my-4">
         <figure>
            <img src="https://img.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg?w=1060&t=st=1666782419~exp=1666783019~hmac=d0fe22544ddcffe298af325818ca533914a0fc643839a514078f77d2c713d128" alt="Shoes" />
         </figure>

         <div className="card-body">
            <h2 className="card-title">{title}
               <div className="badge badge-secondary">{rating.badge}
               </div>
            </h2>
            <p>{details}</p>
            <p className='lg:truncate ... md:truncate ...'>{course_overview}</p>
            <div className="card-actions justify-between">
               <ul className='flex'>
                  <li className='mx-3'>{rating.number}</li>
                  <li>{rating.review}</li>
               </ul>
               <button className="btn btn-primary">Buy Now</button>
            </div>
         </div>
      </div>

   );
};

export default CourseSummary;