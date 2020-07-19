import React from 'react';
import { Component } from 'react';
import cal from './cal-stadium.jpg';

console.log(cal);

class Slideshow extends Component {
  render() {
    return (
    	<h2>
      <img src={cal} alt="Stadium" className="pic" />
      </h2>
      );
  }
}


export default Slideshow;
