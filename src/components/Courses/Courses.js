import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../CourseSummary/CourseSummary';

const Courses = () => {
   const allCourses = useLoaderData()

   return (
      <div>
         <h1> Our All Courses Is Here:</h1>
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