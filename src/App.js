import { Component } from 'react'
import './App.css';
import Navbar from './components/navbar.js';
import Hero from './components/hero.js';
import About from './components/about.js';


class App extends Component{
  state=
  {
    certification: [
      { title: 'Udemy-React JS',description:"Advanced React JS Fundamentals by Nicolas Schurmann", year: 2024, svg: './icons/microsoft.svg' },
      { title: 'Microsoft',description:"Professional Fundamentals of Data Analysis.", year: 2023, svg: './icons/microsoft.svg' },
      { title: 'Microsoft',description:"Professional Fundamentals of Project Management", year: 2023, svg: './icons/microsoft.svg' },
      { title: 'SCRUM Study',description:" Accreditation Body for Scrum and Agile", year: 2022, svg: './icons/microsoft.svg' },
      { title: 'Cisco Networking Academy',description:"PC Hardware and Software.", year: 2022, svg: './icons/microsoft.svg' },
      { title: 'Cisco Networking Academy',description:"PCAP Programming Essentials in Python", year: 2022, svg: './icons/microsoft.svg' },
      { title: 'Google Activate',description:" Cybersecurity in Telecommuting.", year: 2021, svg: './icons/microsoft.svg' },
    ],
    
  }
  render()  {

    return(
      <div className='scroll'>
      <Navbar />
      <Hero />
      <About />

    </div>

    )
  }
}

export default App;
