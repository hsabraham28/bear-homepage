import React from 'react';
import { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <header>

      <div className="logo">
      	Bear With Us
      </div>

      <div className="links">

      <nav>
      	<ul>
      		<li>
      		<a href="#">Home</a>
      		</li>
      		<li>
      		<a href="#">Virtual Sproul</a>
      		</li>
      		<li>
      		<a href="#">Our Story</a>
      		</li>
      		<li>
      		<a href="#">About Us</a>
      		</li>
      		<li>
      		<a href="#">Contact Us</a>
      		</li>
      	</ul>
      	</nav>
      </div>

      </header>
      );
  }
}


export default Header;
