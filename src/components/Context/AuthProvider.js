import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {

   const [user, setUser] = useState(null);
   useEffect(() => {
      onAuthStateChanged(auth, (currentUser => {
         console.log('user inside state change', currentUser)
         setUser(currentUser);
      }))
   }, [])

   const providerLogin = (provider) => {
      return signInWithPopup(auth, provider);
   }

   const authInfo = { user, providerLogin }
   return (
      <div>
         <AuthContext.Provider value={authInfo}>
            {children}
         </AuthContext.Provider>
      </div>
   );
};

export default AuthProvider;