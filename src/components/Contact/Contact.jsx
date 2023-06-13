import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { IconButton } from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import copy from '../../assets/CopySimple.svg'
import send from '../../assets/send.svg'

import './Contact.scss'

const Contact = ()=> {

  return (
    <div className="contact">
        <div className='special-btn'>📬 Contact · me</div>
        <div className='name'>Let's talk!</div>
        <div className="wrapper">
            <div className='call-to-talk'>
                <IconButton href='https://wa.me/573142199627' target='_blank' rel='noopener noreferrer' className='whatsapp'>
                    <WhatsAppIcon/>
                    <p>Let´s talk</p>
                </IconButton>
            </div>
            <div className='call-to-email'>
                <a href='mailto:sergioarevalo301@gmail.com'>
                    <img src={send} alt="send image"/>
                </a>
                <h3>E-mail</h3>
                <p>sergioarevalo301@gmail.com</p>
                <CopyToClipboard text='sergioarevalo301@gmail.com'>
                    <img src={copy} alt='copied' className='copy'/>
                </CopyToClipboard>

            </div>
        </div>
        
    </div>
  )
}

export default Contact;