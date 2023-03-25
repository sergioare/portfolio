import './About.scss'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { IconButton } from '@mui/material';

const About = () => {
    return (
        <div className="about">
            <div className="left-side">
                <div className="img-prof">
                    
                </div>
            </div>
            <div className="right-side">
                <div className="special-btn"> 🤔 About me</div>
                <div className="quote">
                <FormatQuoteIcon className='icon'/>
                <p>YOUR ATTITUDE DETERMINES YOUR ALTITUDE</p>
                </div> 
                <div className="name"> Sergio Alejandro <br/> Arévalo Rodríguez</div>
                <div className="text">
                    <p>
                    <span>👋</span> My name is Sergio Arevalo, or Serch is fine.
                    <br/>
                    <span>👨‍💻</span> I´ve been developing and programming Front interfaces with JavaScript,Typescript 
                    React-Redux, Figma, Node JS, Sass, MUI, Bootstrap, Fontawesome, Formik-Yup, consuming APIs using JS. On the other hand, with logic operations
                    and data processes in Back, I´ve used technologies like Express JS, PostgreSQL,
                    Sequelize, Firebase, Node JS, Dotenv, Mercado Pago, Nodemailer, Axios, Nodemon and Morgan.
                    <br/>
                    <span>🎓</span> I graduated from University Business Foundation of the Chamber of Commerce of Bogota
                    with a Bachelor of International Business degree in 2019, and Fullstack Developer degree from Soy Henry Institute in 2023.
                    <br/>
                    <span>💡</span> Interested in Front-end development with React, Vite, NextJS, Figma, NextJS and UX/UI Design.
                    <br/>
                    <span>🚀</span> Trying to be every day a little better than yesterday.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;