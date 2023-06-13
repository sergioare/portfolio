import { useState } from "react"
import { Register } from "../Register"
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

export const Login = () => {

  const [user, setUser]= useState({
    user: "",
    password:"",
  })

  const [isRegistering, setIsregistering] = useState(false)

  const handleSubmit = async ()=>{
    console.log("registered")
  }
  
  const handlerChange = (e)=>{
    console.log(e.target.value)
  }
  return (
    <>
      {isRegistering?
        <Register/>
        :
        <div className="login">
          <form onSubmit={handleSubmit}>
            <h1>LOGIN</h1>

            <div>
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

          <div>
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

          <div>
            Forgot your Password?
          </div>

          <button type="submit" className="btn">LOGIN</button>
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
