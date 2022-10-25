import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <div>
         <Link to='/'>Home</Link>
         <Link to='/course'>Course</Link>
         <Link to='/blog'>Blog</Link>
         <Link to='/faq'>FAQ</Link>
         <Link to='/user'>User</Link>
      </div>
   );
};

export default Header;