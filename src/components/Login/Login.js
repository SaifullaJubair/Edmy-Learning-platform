import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const Login = () => {

   const { providerLogin, user } = useContext(AuthContext)
   const googleProvider = new GoogleAuthProvider()
   const handleGoogleSignIn = () => {

      providerLogin(googleProvider)
         .then(result => {
            const user = result.user;
            console.log(user)
         })
         .catch(error => console.error(error));
   }
   return (
      <div>
         <h1>Please Login </h1>
         <p>{user?.displayName}</p>
         <img src={user?.photoURL} alt="" />

         <button className="btn btn-circle btn-outline mx-auto" onClick={handleGoogleSignIn}>
            <p>F</p>
         </button>

      </div>
   );
};

export default Login;