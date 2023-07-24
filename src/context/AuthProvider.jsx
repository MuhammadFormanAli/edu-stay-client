import  { createContext } from 'react';
import app from '../firebase/firebase.config'
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword,  getAuth,  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateEmail, updateProfile } from "firebase/auth";
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider()


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

    const facebookSignIn =()=>{
        return signInWithPopup(auth, facebookProvider)
    }

    
    const logOut = () => {
        // console.log('Logged Out')
        return signOut(auth);
    }

    const  manageUser =  (name, photo)=>{
        return updateProfile(auth.currentUser,{
            displayName:name, photoURL:photo
        })
    }

    const  manageEmail =  (email)=>{
        return updateEmail(auth.currentUser,email)
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
        manageUser,
        manageEmail,
        facebookSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;