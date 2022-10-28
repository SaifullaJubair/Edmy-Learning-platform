import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../CourseSummary/CourseSummary';

const Courses = () => {
   const allCourses = useLoaderData()

   return (
      <div>
         <h1 className='text-center font-semibold lg:text-5xl text-3xl mt-14'> Our All Courses is here:</h1>
         {
            allCourses.map(course =>
               <CourseSummary
                  key={course._id}
                  course={course}
               ></CourseSummary>
            )
         }
      </div>
   );
};

export default Courses;