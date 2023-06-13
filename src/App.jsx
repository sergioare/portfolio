import {Routes, Route} from 'react-router-dom'
import './App.scss'
import { About, Contact, Home, Login, Projects, Skills, Testimonials, TrackRecord } from './components'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-me' element={<About/>}/>
        <Route path='/portfolio' element={<Projects/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/degrees' element={<TrackRecord/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
