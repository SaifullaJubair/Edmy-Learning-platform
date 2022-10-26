import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../CourseSummary/CourseSummary';

const Home = () => {
   const allCourses = useLoaderData()
   return (
      <div className=' '>
         <h2>This is Home</h2>
         <h3>Our Course {allCourses.length}</h3>
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

export default Home;