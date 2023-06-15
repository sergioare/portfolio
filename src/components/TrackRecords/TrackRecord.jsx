import './TrackRecord.scss'
import { academyExp, professionalExp } from './data'
import {analytics} from '../../firebase'
import { logEvent } from 'firebase/analytics'
import { useEffect } from 'react'

const TrackRecord = () => {
  useEffect(()=>{
    logEvent(analytics,"TrackRecords_visited")
})
  return (
    <div className="track-record">
        <div className="wrapper-record">
          <div className='special-btn'>💼 Career</div>
          <div className='name'> Career Development</div>
        </div>
         
          <div className='left'>
            <h2>Professional Area</h2>
              <div className='exp'>
                {professionalExp.map((exp, i)=>{
                  return( 
                    <div className="cardExp" key={exp.titleJob}>
                      <div className="title">
                        {exp.titleJob}</div>
                      <ul className="task" key={i}>
                          {exp.tasks.map((task, index)=>(
                            <li key={index}>{task}</li>)
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
                {academyExp.map((exp, i)=>{
                  return(
                    <div className='cardExp' key={i}>
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
export default TrackRecord;