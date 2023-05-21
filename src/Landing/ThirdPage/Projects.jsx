import './Projects.scss'
import design from '../../assets/design.svg'
import server from '../../assets/server.svg'

const Projects = () => {
    return (
        <div className='projects'>
            <div className="top-side">
                <div className='top'>
                    <div className='special-btn'>🔗 Portfolio</div>
                </div>
                <div className="bottom">
                    <div className='works'>Works And Projects</div>
                    <div className='exp-btn'>
                        <div className="btn"><span><img src={design} alt='design'/></span>Front-end</div>
                        <div className="btn"><span><img src={server} alt='design'/></span>Back-end</div>
                        <div className="btn"><span>$</span>Commercial</div>
                    </div>
                </div>
            </div>
            <div className="bottom-side">
            
            </div>
            
        </div>
    );
};

export default Projects;