import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { createContext,useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'

export const authContext =  createContext()

export const useAuth = ()=> useContext(authContext)

// export const useAuth = () => {
//     const context = useContext(authContext)
//     if(!context) throw new Error("This user haven´t authentication")
//     return context
// }

export const AuthContextProvider =({children})=>{
    const [user, setUser] = useState(null)

    const auth = getAuth();
        setPersistence(auth, browserSessionPersistence)

    // const showAlert=()=>{
    //     Swal.fire({
    //         title:'Please, confirm your email inbox',
    //         icon: 'info',
    //         footer: 'Come back when you get it',
    //         timer: 2000,            
    //     })
    // }
    // const verifyUserEmail = ()=>{
    //     sendEmailVerification(auth.currentUser)
    //     .then(() => {
    //         console.log('Email verification sent!')
    //         showAlert()
    //     });
    // }

    // const login = (email, password)=>{
    //     setPersistence(auth, browserSessionPersistence)
    //     return signInWithEmailAndPassword(auth, email, password)
    // }

    // const loginWithGoogle = ()=>{
    //     const provider = new GoogleAuthProvider()
    //     return signInWithPopup(auth, provider)
    // }

    // const loginWithFacebook = ()=>{
    //     const provider = new FacebookAuthProvider()
    //     return signInWithPopup(auth, provider)
    // }

    // const loginWithGithub = ()=>{
    //     const provider = new GithubAuthProvider(); 
    //     return signInWithPopup(auth, provider)
    // }


    // const logOut = ()=>signOut(auth)

    // const signUp = (email, password)=>{
    //     setPersistence(auth, browserSessionPersistence)
    //     return createUserWithEmailAndPassword(auth, email, password)
    // }

    // useEffect(()=>{
    //     const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
    //         setUser(currentUser)
    //     })
    //     return ()=> unsubscribe()
    // },[]) 
    
    return(
        <authContext.Provider
            // value={{auth, verifyUserEmail, login, loginWithGoogle, loginWithFacebook, loginWithGithub,logOut, signUp}}
            value={{auth}}        
        >
        {children}
        </authContext.Provider>
    )
}