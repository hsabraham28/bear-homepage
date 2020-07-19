import React from 'react';
import { Component } from 'react';
import './Assets/css/default.min.css';
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Slideshow from './components/slideshowComponent/slideshow';
import IconButton from './components/iconButtonComponent/iconButton';
import ButtonTitles from './components/buttonTitlesComponent/buttonTitles';

class App extends Component {
  render() {
    return (
      <div className="App">

      <Header />

      <Slideshow />

      <Homepage />

      <IconButton />

      <ButtonTitles />

      <Footer />
        
    </div>
      );
  }
}


export default App;
