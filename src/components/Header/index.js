import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './header.css';

import * as ROUTES from '../../constants/routes';

class Header extends Component {
  render() {
    return (
    	<header className='clearfix'>
    		<div className='container'>
		    	<h1>Matt Lacey</h1>
		    	<nav>
		    		<ul>
			    		<li>
			    			<NavLink to={ROUTES.PROJECTS} activeClassName='active'>Projects</NavLink>
			      		</li>
			      		<li>/</li>
			    		<li>
			        		<NavLink to={ROUTES.ABOUT} activeClassName='active'>About</NavLink>
			    		</li>
			    	</ul>
		    	</nav>
		    </div>
	    </header>
    );
  }
}

export default Header;
