import logo from '../../assets/Logo.png';
import {Link} from 'react-router-dom'
import { navbarItems } from './data';
import Modals from '../../modal/Modals'
import './Navbar.scss'

 const Navbar = () => {
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
                        <Link to={item.path} className='navbar-option'>
                            {item.name}
                        </Link>
                    </div>
                ))}
                <Modals/>
            </div>
        </div>
    </div>
)
}
export default Navbar;