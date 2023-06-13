import { useState } from "react"
import { Login } from "../Login"

export const Register = () => {

  const [isRegistering, setIsRegistering] = useState(true)
  const [user, setUser]= useState({
    email: "",
    password:"",
    confirmPassword:"",
    nickname:""
  })

  const handleSubmit = async ()=>{
    console.log("registered")
  }
  
  const handlerChange = (e)=>{
    console.log(e.target.value)
  }

  return (
    <>
    {isRegistering?
      <div className="register">
        <form onSubmit={handleSubmit}>
          <h1>SIGN UP</h1>

          <div>
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

          <button type="submit" className="btn">Sign Up</button>
          <p>Already have an Account? <span onClick={()=> setIsRegistering(!isRegistering)} className="link">Login</span></p>
          
        </form>
      </div>
      :<Login/>
  }
        
    </>
  )
}
