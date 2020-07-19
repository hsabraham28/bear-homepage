import React from 'react';
import { Component } from 'react';
import vs from './virtual-sproul-icon.PNG';
import os from './our-story-icon.PNG';
import conn from './connect-icon.PNG';

console.log(vs);
console.log(os);
console.log(conn);

class IconButton extends Component {
  render() {
    return (
    	<h2>
      <button><img src={vs} alt="my image" onClick={this.myfunction} /></button>
      <button><img src={os} alt="my image" onClick={this.myfunction} /></button>
      <button><img src={conn} alt="my image" onClick={this.myfunction} /></button>
      </h2>

      );
  }

  myfunction() {
        console.log("CLICKED");
  }
}


export default IconButton;
