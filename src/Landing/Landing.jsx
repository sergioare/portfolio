import FirstPage from './FirstPage/FirstPage';
import Skills from './FourthPage/Skills';
import './Landing.scss'
import About from './SecondPage/About';
import Projects from './ThirdPage/Projects';

const Landing = () => {
    return (
        <div className='landing'>
            <FirstPage/>
            <About/>
            <Projects/>
            <Skills/>
        </div>
    );
};

export default Landing;