import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import App from './App'
import { AuthContextProvider } from './firebase'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthContextProvider>
        <Navbar/>
        <App />
        <Footer/>
    </AuthContextProvider>
  </BrowserRouter>,
)
