import './FirstPage.scss';
import avatar from '../../assets/AvatarAndIcons.png';
import logo from '../../assets/Logo.png';
import { IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const FirstPage = () => {
    return (
        <div className='firstPage'>

            <div className='navbar'>
                <div className="wrapper">
                    <div className="left">
                        <img src={logo} alt='logo'/>
                    </div>
                    <div className="right">
                        <div className='home'>Home</div>
                        <div className='navbar-option'>About me</div>
                        <div className='navbar-option'>Portfolio</div>
                        <div className='navbar-option'>Skills</div>
                        <div className='navbar-option'>Degrees</div>
                        <div className='navbar-option'>Testimonials</div>
                        <div className='navbar-option'>Contact</div>
                    </div>
                </div>
            </div>

            <div className='left-side'>
                <div className="wrapper-left">
                    <div className='special-btn'>👋 Welcome!</div>
                    <div className='name'>Sergio <br/> Arevalo</div>
                    <div className='degree'> Full Stack dev ·  International Bussiness</div>
                    <div className='icons'>
                        <IconButton href='https://github.com/sergioare' target='_blank' rel='noopener noreferrer' className='icon'>
                            <GitHubIcon className='icon'/>
                        </IconButton>
                        <IconButton href='https://www.linkedin.com/in/sergio-arevalo-ba4523254/' target='_blank' rel='noopener noreferrer' className='icon'>
                            <LinkedInIcon className='icon'/>
                        </IconButton>
                       
                    </div>
                </div>
            </div>

            <div className='center-side'>
                <img src={avatar} alt="avatar"/>
            </div>

            <div className='right-side'>
                <div className="download">
                    <p>Download CV</p>
                    <DownloadIcon/>
                </div>

                <div className='call-to-talk'>
                <IconButton href='https://wa.me/573142199627' target='_blank' rel='noopener noreferrer' className='whatsapp'>
                    <WhatsAppIcon/>
                    <p>Let´s talk</p>
                </IconButton>
                </div>
            </div>
        </div>
    );
};

export default FirstPage;