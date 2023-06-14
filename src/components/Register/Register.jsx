import { useState } from "react"
import { Login } from "../Login"
import './Register.scss'
import { useAuth } from "../../firebase"
import { useNavigate } from "react-router-dom"
import { getAuth, setPersistence,browserSessionPersistence, createUserWithEmailAndPassword } from "firebase/auth";
export const Register = () => {

  const [isRegistering, setIsRegistering] = useState(true)
  const [user, setUser]= useState({
    email: "",
    password:"",
    confirmPassword:"",
    nickname:""
  })

  const navigate = useNavigate()
  const auth = getAuth();

  const signUp = async (email, password)=>{
   await setPersistence(auth, browserSessionPersistence)
    return createUserWithEmailAndPassword(auth, email, password)
}
  // const {signUp, verifyUserEmail} = useAuth()

  const handleSubmit = async (event)=>{
      event.preventDefault()
      try {
        const UserUid = await signUp(user.email, user.password)
        // await verifyUserEmail()
        const data = {
          nickname: user.nickname,
          confirmPassword: user.confirmPassword
        }
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
  }

  return (
    <>
    {isRegistering?
      <div className="register">
        <form onSubmit={handleSubmit}>
          <h1>SIGN UP</h1>

          <div className="div-input">
            <label htmlFor="nickname">Nickname</label>
            <input
              type="text"
              name="nickname"
              value={user.nickname}
              onChange={handlerChange}
              className="input"
              placeholder="Eg. Itachi Uchiha"
            />
          </div>

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

          <div className="div-input">
            <label htmlFor="confirmPassword">Verify Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handlerChange}
              className="input"
              placeholder="********"
              autoComplete="on"
            />
          </div>

          <button type="submit" className="special-btn">Sign Up</button>
          <p>Already have an Account? <span onClick={()=> setIsRegistering(!isRegistering)} className="link">Login</span></p>
          
        </form>
      </div>
      :<Login/>
  }
        
    </>
  )
}
