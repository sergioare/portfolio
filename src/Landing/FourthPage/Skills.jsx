import './Skills.scss'
import CssSvg from '../../assets/Css.svg'
import ESlint from '../../assets/ESlint.svg'
import Figma from '../../assets/Figma.svg'
import Firebase from '../../assets/Firebase.svg'
import Git from '../../assets/Git.svg'
import Github from '../../assets/Github.svg'
import HTML5Svg from '../../assets/HTML5.svg'
import Insomnia from '../../assets/Insomnia.svg'
import Javascript from '../../assets/Javascript.svg'
import MUISvg from '../../assets/MUI.svg'
import Nodejs from '../../assets/Nodejs.svg'
import npm from '../../assets/npm.svg'
import Pg from '../../assets/npm.svg'
import ReactSvg from '../../assets/React.svg'
import ReduxSvg from '../../assets/Redux.svg'
import Sass from '../../assets/Sass.svg'
import Vercel from '../../assets/Vercel.svg'
import VsCode from '../../assets/VsCode.svg'


const Skills = () => {
    return (
        <div className="skills">
            <div className="wrapper">
                <div className="top">
                    <div className='special-btn'>🧑‍💻 Skills · Experience</div>
                    <div className='name'>Technologies and Skills</div>
                </div>

                <div className="bottom">
                    <div className="tech">
                        <p>Techs I use every day</p>
                        <ul>
                            <li><img src={VsCode} alt='icon'/></li>
                            <li><img src={ReactSvg} alt='icon'/></li>
                            <li><img src={ReduxSvg} alt='icon'/></li>
                            <li><img src={Javascript} alt='icon'/></li>
                            <li><img src={MUISvg} alt='icon'/></li>
                            <li><img src={CssSvg} alt='icon'/></li>
                            <li><img src={HTML5Svg} alt='icon'/></li>
                            <li><img src={Figma} alt='icon'/></li>
                            </ul>
                            <ul>
                            <li><img src={Github} alt='icon'/></li>
                            <li><img src={Git} alt='icon'/></li>
                            <li><img src={npm} alt='icon'/></li>
                            <li><img src={Nodejs} alt='icon'/></li>
                            <li><img src={Sass} alt='icon'/></li>
                        </ul>
                    </div>
                    <div className="others">
                        <p>Techs I use every day</p>
                        <ul>
                            <li><img src={ESlint} alt='icon'/></li>
                            <li><img src={Pg} alt='icon'/></li>
                            <li><img src={Vercel} alt='icon'/></li>
                            <li><img src={Firebase} alt='icon'/></li>
                            <li><img src={Insomnia} alt='icon'/></li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Skills;