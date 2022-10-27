import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Categories from '../components/Sidebar/Categories';

const Main = () => {
   return (
      <div >
         <Header></Header>
         <div className='grid lg:grid-cols-5 md:grid-cols-4 border'>
            <div data-theme="night" className='lg:col-span-1 md:col-span-1 border'>
               <Categories></Categories>
            </div>
            <div className='lg:col-span-4  md:col-span-3 border'>
               <Outlet></Outlet>
            </div>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default Main;
