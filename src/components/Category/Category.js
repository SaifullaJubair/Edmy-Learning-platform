import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../CourseSummary/CourseSummary';

const Category = () => {
   const categoryCourse = useLoaderData()
   return (
      <div >
         <h2 className='text-center font-semibold lg:text-3xl'>Our Best {categoryCourse.length} courses are </h2>
         {
            categoryCourse.map(course => <CourseSummary
               key={course._id}
               course={course}></CourseSummary>)
         }

      </div>
   );
};

export default Category;   