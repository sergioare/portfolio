import logo from '../../assets/Logo.png';
import {Link} from 'react-router-dom'
import { navbarItems } from './data';
import Modals from '../../modal/Modals'
import './Navbar.scss'
import { Login } from '../Login';
import { analytics } from '../../firebase';
import { logEvent } from "firebase/analytics";

 const Navbar = () => {
    const handleUrlTracker = (path, url)=>{
        return analytics.logEvent(analytics,`${path}`,{"url": url})
    }
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="left">
                <Link to='/'>
                    <img src={logo} alt='logo'/>
                </Link>
            </div>
            <div className="right">
                {navbarItems.map((item, index)=>(
                    <div  key={index}>
                        <Link to={item.path} onClick={()=>handleUrlTracker(item.path, item.path)} className='navbar-option'>
                            {item.name}
                        </Link>
                    </div>
                ))}
                <Modals name="Login" classNameProp='login-btn'>
                    <Login/>
                </Modals>
            </div>
        </div>
    </div>
)
}
export default Navbar;