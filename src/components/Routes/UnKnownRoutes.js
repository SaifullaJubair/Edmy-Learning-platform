import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../../img/004.jpg'


const UnKnownRoutes = () => {
   return (
      <div className='flex flex-col justify-center items-center'>
         <img src={pic} alt="" className='w-4/5' />
         <Link to='/courses' > <button className="btn btn-primary mt-2">Go Back Course Page</button></Link>
      </div>
   );
};

export default UnKnownRoutes;