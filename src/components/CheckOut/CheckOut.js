import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CheckOut = () => {
   const course = useLoaderData()
   const { title } = course
   console.log(course);
   return (
      <div>
         <h1>This is checkout page </h1>
         <h1>{title}</h1>


      </div>
   );
};

export default CheckOut; <h1>This is checkout page</h1>