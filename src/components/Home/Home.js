import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
   return (
      <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
         <div className="hero-overlay bg-opacity-60"></div>
         <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
               <h1 className="mb-5 text-5xl font-bold">Hello there!</h1>
               <p className="mb-5">Here you can found your best courses</p>
               <button className="btn btn-primary"><Link to='/courses'>Get Started</Link></button>
            </div>
         </div>
      </div>
   );
};

export default Home;