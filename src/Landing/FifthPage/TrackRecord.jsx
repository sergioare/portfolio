import './TrackRecord.scss'
import { professionalExp } from './data'

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
                      <div className="title"></div>
                      <p className="task"></p>
                      <div className="duration"></div>
                    </div>
                 )})}
              </div>
          </div>

          <div className='right'>
            <h2>Academy</h2>
          </div>
    </div>
  )
}
