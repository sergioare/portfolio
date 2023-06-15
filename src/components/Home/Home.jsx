import './Home.scss';
import avatar from '../../assets/AvatarAndIcons.png';
import { IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { analytics } from '../../firebase';
import { logEvent } from "firebase/analytics";
import { useEffect } from 'react';


const Home = () => {
    useEffect(()=>{
             logEvent(analytics,"HomePage_visited")
    })
    return (
        <div className='firstPage'>
   
            <div className='left-side'>
                <div className="wrapper-left">
                    <div className='special-btn'>👋 Welcome!</div>
                    <div className='name'>Sergio <br/> Arévalo</div>
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
                <IconButton href='https://firebasestorage.googleapis.com/v0/b/portfolio-fabc7.appspot.com/o/Resume_CV_pdf.pdf?alt=media&token=53da749f-6137-44b2-9db2-32e1eb88dcf1' target='_blank' rel='noopener noreferrer' className='download-btn'>
                    <p>Download CV</p>
                    <DownloadIcon/>
                </IconButton>
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

export default Home;