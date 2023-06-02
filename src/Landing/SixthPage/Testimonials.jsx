import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import {testimonials} from './data'
import './Testimonials.scss'

const Testimonials = () =>{
  return (
    <div className='testimonials'>
        <div className="special-btn"> 💬 Recommendations</div>
        <div className='name'>Testimonials</div>
        <div className='cards'>
            {testimonials.map(testimonial=>{
                return(
                    <div className="cardExp">
                        <FormatQuoteIcon className='icon'/>
                        <div className="description">{testimonial.description}</div>
                        <FormatQuoteIcon className='icon-final'/>
                        <div className='info'>
                            <img src={testimonial.img} alt={testimonial.alt}/>
                            <div className="text">
                                <div className="title">{testimonial.name}</div>
                                <hr/>
                                <div className="position">{testimonial.position}</div>

                            </div>
                        </div>
                    </div>
                )
            })}

        </div>

    </div>
  )
}

export default Testimonials