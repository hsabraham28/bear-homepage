import React from 'react';
import { Component } from 'react';
import as from './asuc-logo.png';

console.log(as);

class Footer extends Component {
  render() {
    return (
      <footer>

     

      University of California, Berkeley

     

      <div className="camp">
      	<img src={as} alt="ASUC logo" />
      </div>

      
        
      </footer>
      );
  }
}


export default Footer;
