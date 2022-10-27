import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {

   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   }

   const signIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
   }

   const logOut = () => {
      return signOut(auth)
   }




   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
         console.log('user inside state change', currentUser)
         setUser(currentUser);
         setLoading(false)
      })
      return () => {
         unsubscribe();
      }
   }, [])

   const providerLogin = (provider) => {
      return signInWithPopup(auth, provider);
   }

   const authInfo = { user, providerLogin, createUser, signIn, logOut }
   return (
      <div>
         <AuthContext.Provider value={authInfo}>
            {children}
         </AuthContext.Provider>
      </div>
   );
};

export default AuthProvider;