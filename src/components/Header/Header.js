import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";

import { AuthContext } from '../Context/AuthProvider';

const Header = () => {
   const { user, logOut } = useContext(AuthContext)

   const handleLogOut = () => {
      logOut()
         .then(() => { })
         .catch(error => console.error(error));
   }
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
                     <li><Link to='/register'>SignUp</Link></li>
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
               </ul>
            </div>
            <div className="navbar-end mr-3">
               <input type="checkbox" className="toggle mr-2" />
               {
                  user?.uid ?
                     <>
                        <button className='mx-2' onClick={handleLogOut}> Logout</button>
                     </>
                     :
                     <>
                        <Link to='/register' className='mx-2'>SignUp</Link>
                        <Link to='/login' className='mr-2'>Login</Link>
                     </>
               }
               <Link to='/profile'>
                  {
                     user?.photoURL ?
                        <span className='flex item-center'>
                           <p className='mt-3 mr-2'>{user?.displayName}</p>
                           <img className='h-12 rounded-full' src={user?.photoURL} alt="User_Photo" />
                        </span>
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