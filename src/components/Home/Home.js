import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
   return (
      <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")` }}>
         <div className="hero-overlay bg-opacity-60"></div>
         <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
               <h1 className="mb-5 text-5xl font-bold">Hello there!</h1>
               <p className="mb-5 text-2xl">Here you can found your best courses.After choosing your Course Millions of  Students are Successful. <br />So Chose what you want.</p>
               <button className="btn btn-primary"><Link to='/courses'>ALL Courses</Link></button>
            </div>
         </div>
      </div>
   );
};

export default Home;