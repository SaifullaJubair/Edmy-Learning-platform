import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
   return (
      <div>
         <h3>Here Is our Terms and Conditions</h3>
         <p>Go back to Registration: <Link to='/register'><span className='link link-hover link-primary'>Register</span></Link></p>
      </div>
   );
};

export default Terms;