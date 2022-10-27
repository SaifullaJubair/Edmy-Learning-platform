import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";

import { AuthContext } from '../Context/AuthProvider';

const Header = () => {
   const { user } = useContext(AuthContext)
   return (
      <div>
         <div className="navbar bg-base-100">
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                     <li><Link to='/faq'>FAQ</Link></li>
                     <li tabIndex={0}>
                        <Link to='/blog' className="justify-between">Blog</Link>
                     </li>
                     <li><Link to='/courses'>Courses</Link></li>
                     <li><Link to='/signup'>SignUp</Link></li>
                     <li><Link to='/login'>Login</Link></li>
                  </ul>
               </div>
               <Link to='/' className="btn btn-ghost normal-case text-xl">Edmy</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal p-0">
                  <li><Link to='/faq'>FAQ</Link></li>
                  <li><Link to='blog'>Blog</Link></li>
                  <li><Link to='/courses'>Courses</Link></li>
                  <li><Link to='/signup'>SignUp</Link></li>
                  <li><Link to='/login'>Login</Link></li>
               </ul>
            </div>
            <div className="navbar-end mr-3">
               <input type="checkbox" className="toggle mr-2" />
               <Link to='/user'>
                  {
                     user?.photoURL ?
                        <img className='h-12 rounded-full' src={user?.photoURL} alt="User_Photo" />
                        :
                        <span ><FaUserAlt></FaUserAlt> </span>
                  }

               </Link>
            </div>
         </div>
      </div>
   );
};

export default Header;