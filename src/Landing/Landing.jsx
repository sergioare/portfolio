import { TrackRecord } from './FifthPage/TrackRecord';
import FirstPage from './FirstPage/FirstPage';
import Skills from './FourthPage/Skills';
import './Landing.scss'
import About from './SecondPage/About';
import Contact from './SeventhPage/Contact';
import Testimonials from './SixthPage/Testimonials';
import Projects from './ThirdPage/Projects';

const Landing = () => {
    return (
        <div className='landing'>
            <FirstPage/>
            <About/>
            <Projects/>
            <Skills/>
            <TrackRecord/>
            <Testimonials/>
            <Contact/>
        </div>
    );
};

export default Landing;