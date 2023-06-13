import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import './Footer.scss'

const Footer = () => {
  return (
    <div className="end">
            <p>Copyright © Sergio Arevalo · 2023</p>
            <div className='icons'>
                <IconButton href='https://github.com/sergioare' target='_blank' rel='noopener noreferrer' className='icon'>
                    <GitHubIcon className='icon'/>
                </IconButton>
                <IconButton href='https://www.linkedin.com/in/sergio-arevalo-ba4523254/' target='_blank' rel='noopener noreferrer' className='icon'>
                    <LinkedInIcon className='icon'/>
                </IconButton>
               
            </div>
    </div>
  )
}
export default Footer;
