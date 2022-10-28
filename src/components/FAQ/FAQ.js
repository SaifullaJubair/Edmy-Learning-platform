import React from 'react';

const FAQ = () => {
   return (
      <div className='flex flex-col justify-center min-h-[62vh]'>
         <h2 className='text-center text-3xl my-5'>Some FAQ:</h2>
         <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
               Can I access corses after finish the course?
            </div>
            <div className="collapse-content ">
               <p>LifeTime access.</p>
            </div>
         </div>
         <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
               Can I download this course?
            </div>
            <div className="collapse-content">
               <p>No sir,For copyright reason.
               </p>
            </div>
         </div>
         <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
               Can i get this course free?
            </div>
            <div className="collapse-content">
               <p>Some time we provide some discount.
               </p>
            </div>
         </div>

      </div>
   );
};

export default FAQ;