import  { createContext } from 'react';
import app from '../firebase/firebase.config'
import { GoogleAuthProvider, createUserWithEmailAndPassword,  getAuth,  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();


const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn =()=>{
        return signInWithPopup(auth, provider)
    }

    
    const logOut = () => {
        // console.log('Logged Out')
        return signOut(auth);
    }

    const  manageUse =  (name, photo)=>{
        return updateProfile(auth.currentUser,{
            displayName:name, photoURL:photo
        })
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setLoading(false)
        })

        return () => {
            unsubscribe();
        }
    }, [])


    

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        loading,
        googleSignIn,
        manageUse,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;