import { Component } from 'react'
import './App.css';
import Navbar from './components/navbar.js';
import Hero from './components/hero.js';
import About from './components/about.js';


class App extends Component{
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
