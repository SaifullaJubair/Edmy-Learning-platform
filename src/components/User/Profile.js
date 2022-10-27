import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const Profile = () => {
   const { user } = useContext(AuthContext)

   const name = useRef(user.displayName)
   const photoURLRef = useRef(name, user.photoURL)

   const handleSubmit = (event) => {
      event.preventDefault()
      console.log('userPhotoURL:', photoURLRef.current.value)
      console.log('userName:', name.current.value)

   }

   return (
      <div className="hero min-h-screen bg-base-200">
         <div className="hero-content flex-col">
            <h1 className="text-5xl font-bold">Please Login now!</h1>

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
               <form onSubmit={handleSubmit} className="card-body">
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text text-xl font-semibold">Email Address</span>
                     </label>
                     <input type="email" name='email' defaultValue={user?.email} readOnly placeholder="" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text text-xl font-semibold">Name</span>
                     </label>
                     <input name='name' type="text" placeholder="" className="input input-bordered" defaultValue={user?.displayName} ref={name} />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text text-xl font-semibold">Photo URL</span>
                     </label>
                     <input name='photoURL' type="text" placeholder="" ref={photoURLRef} className="input input-bordered" defaultValue={user?.photoURL} />
                  </div>
                  <div className="form-control mt-2">
                     <button className="btn btn-primary my-2">Submit</button>
                  </div>
               </form>
            </div>

         </div>
      </div >
   );
};

export default Profile;