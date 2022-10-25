import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Categories from '../components/Sidebar/Categories';

const Main = () => {
   return (
      <div>
         <Header></Header>
         {/* <div className='grid lg:grid-cols-4 md:grid-cols-3 border'>

            <Categories className='lg:col-span-1 md:col-span-1'></Categories>

            <Outlet className='text-5xl lg:col-span-3  md:col-span-2'></Outlet>

         </div> */}

         <div className='grid lg:grid-cols-4 md:grid-cols-3 border'>
            <div className='
            text-5xl
            lg:col-span-1
            md:col-span-1
            border
            '>
               <Categories></Categories>
            </div>
            <div className='text-5xl lg:col-span-3  md:col-span-2 border bg-slate-500'>
               <Outlet></Outlet>
            </div>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default Main;
