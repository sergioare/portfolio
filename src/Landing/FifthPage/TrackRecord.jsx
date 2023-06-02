import './TrackRecord.scss'
import { academyExp, professionalExp } from './data'

export const TrackRecord = () => {
  return (
    <div className="track-record">
        <div className="wrapper">
          <div className='special-btn'>💼 Career</div>
          <div className='name'> Career Development</div>
        </div>
         
          <div className='left'>
            <h2>Professional Area</h2>
              <div className='exp'>
                {professionalExp.map(exp=>{
                  return( 
                    <div className="cardExp">
                      <div className="title">
                        {exp.titleJob}</div>
                      <ul className="task">
                          {exp.tasks.map(task=>(
                            <li>{task}</li>)
                            )}
                        </ul>
                      <div className="duration">
                        {`${exp.durationFrom} / ${exp.durationTo} `}
                        </div>
                    </div>
                 )})}
              </div>
          </div>

          <div className='right'>
            <h2>Academy</h2>
              <div className='exp'>
                {academyExp.map(exp=>{
                  return(
                    <div className='cardExp'>
                      <div className="title">{exp.degree}</div>
                      <div className="subtitle">{exp.institution}</div>
                      <div className='description'>{exp.description}</div>
                      <div className="duration">
                        {`${exp.durationFrom} ${exp.durationTo} `}</div>
                    </div>

                  )
                })}
              </div>
          </div>
    </div>
  )
}
