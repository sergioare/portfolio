import { useState } from "react"
import { Register } from "../Register"
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Login.scss'
import { useAuth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

export const Login = () => {

  const [user, setUser]= useState({
    email: "",
    password:"",
  })

  const auth = getAuth();

  const login = (email, password)=>{
        setPersistence(auth, browserSessionPersistence)
        return signInWithEmailAndPassword(auth, email, password)
    }
  const [isRegistering, setIsregistering] = useState(false)
  const navigate =useNavigate()

  // const {login, loginWithGoogle, loginWithFacebook,loginWithGithub, logOut} = useAuth()

  const handleSubmit = async (event)=>{
    event.preventDefault()
    const showAlert=()=>{
      Swal.fire({
          title:'gracias',
          icon: 'success',
          footer: 'Come back when you get it',
          timer: 10000,            
      })}
    try {
       await login(user.email, user.password) 
       showAlert();
      return navigate('/degrees')
      // }
      // else {
        
      //     alert('Please, try to login')
      //   }
    } catch (error) {
      console.log(error)
    }
  }
  // const handleSubmit =  (event)=>{
  //   console.log(event)
  // }
  const handleLogOut = async(event)=>{
    event.preventDefault()
    try {
      await logOut()
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  const handlerChange = ({target:{value,name}})=>{
    setUser({
      ...user,
      [name]: value
    })

  const handlerGoogleLogin = async ()=>{
    try {
      
    } catch (error) {
      
    }
  }

  }
  return (
    <>
      {isRegistering?
        <Register/>
        :
        <div className="login">
          <form onSubmit={handleSubmit}>
            <h1>LOGIN</h1>

            <div className="div-input">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handlerChange}
              className="input"
              placeholder="Eg. email@...com"
            />
          </div>

          <div className="div-input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handlerChange}
              className="input"
              placeholder="********"
              autoComplete="on"
            />
          </div>

          <div className="forgot-pass">
            Forgot your Password?
          </div>

          <button type="submit" className="special-btn">LOGIN</button>
          <p>Don´t have an account?<span onClick={()=> setIsregistering(!isRegistering)} className="link">Sign Up</span></p>

          <span>OR</span>
          <hr/>
          <div className="icons">
            <button className="icon">{<FacebookIcon/>}</button>
            <button className="icon">{<GitHubIcon/>}</button>
            <button className="icon">{<GoogleIcon/>}</button>
          </div>

          </form>
        </div>
      }
    </>
  )
}
