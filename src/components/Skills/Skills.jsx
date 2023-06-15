import './Skills.scss'
import CssSvg from '../../assets/Css.svg'
import ESlint from '../../assets/ESLint.svg'
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
import Pg from '../../assets/Pg.svg'
import ReactSvg from '../../assets/React.svg'
import ReduxSvg from '../../assets/Redux.svg'
import Sass from '../../assets/Sass.svg'
import Vercel from '../../assets/Vercel.svg'
import VsCode from '../../assets/VsCode.svg'
import Vue from '../../assets/Vue.svg'
import Ts from '../../assets/Ts.svg'
import Next from '../../assets/Next.svg'
import { analytics } from '../../firebase'
import { logEvent } from 'firebase/analytics'
import { useEffect } from 'react'


const Skills = () => {
    useEffect(()=>{
        logEvent(analytics,"Skills_visited")
})
    return (
        <div className="skills">
            <div className="wrapper-skills">
                    <div className='special-btn'>🧑‍💻 Skills · Experience</div>
                    <div className='name'>Technologies and Skills</div>

                <div className="bottom">
                    <div className="tech">
                        <p>Techs I use every day</p>
                        <ul>
                            <li><img src={VsCode} alt='icon'/><span>Visual Studio Code</span></li>
                            <li><img src={ReactSvg} alt='icon'/><span>React.js</span></li>
                            <li><img src={ReduxSvg} alt='icon'/><span>Redux</span></li>
                            <li><img src={Javascript} alt='icon'/><span>Javascript</span></li>
                            <li><img src={MUISvg} alt='icon'/><span>Material UI</span></li>
                            <li><img src={CssSvg} alt='icon'/><span>CSS</span></li>
                            <li><img src={HTML5Svg} alt='icon'/><span>HTML5</span></li>
                            <li><img src={Figma} alt='icon'/><span>Figma</span></li>
                            </ul>
                            <ul>
                            <li><img src={Github} alt='icon'/><span>Github</span></li>
                            <li><img src={Git} alt='icon'/><span>Git</span></li>
                            <li><img src={npm} alt='icon'/><span>Npm</span></li>
                            <li><img src={Nodejs} alt='icon'/><span>Node.Js</span></li>
                            <li><img src={Sass} alt='icon'/><span>Sass</span></li>
                        </ul>
                    </div>
                    <div className="others">
                        <p>Other techs I've done projects with</p>
                        <ul>
                            <li><img src={ESlint} alt='icon'/><span>Eslint</span></li>
                            <li><img src={Pg} alt='icon'/><span>PostgreSQL</span></li>
                            <li><img src={Vercel} alt='icon'/><span>Vercel</span></li>
                            <li><img src={Firebase} alt='icon'/><span>Firebase</span></li>
                            <li><img src={Insomnia} alt='icon'/><span>Insomnia</span></li>
                            <li><img src={Vue} alt='icon'/><span>Vue.Js</span></li>
                            <li><img src={Ts} alt='icon'/><span>Typescript</span></li>
                            <li><img src={Next} alt='icon'/><span>Next.Js</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Skills;