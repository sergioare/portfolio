import FirstPage from './FirstPage/FirstPage';
import './Landing.scss'
import About from './SecondPage/About';

const Landing = () => {
    return (
        <div className='landing'>
            <FirstPage/>
            <About/>
        </div>
    );
};

export default Landing;