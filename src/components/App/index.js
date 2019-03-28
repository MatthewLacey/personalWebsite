import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import Header from '../Header';
import Projects from '../Projects';
import About from '../About';
import Landing from '../Landing';
import Footer from '../Footer';

import * as ROUTES from '../../constants/routes';

library.add(faAt);
library.add(faGithub);
library.add(faGithubAlt);
library.add(faLinkedinIn);

class App extends Component {
	render() {
		return (
    		<Router>
          <div>
  				  <Header />
  				  <Route exact path={ROUTES.LANDING} component={Landing} />
  				  <Route path={ROUTES.PROJECTS} component={Projects} />
    			 <Route path={ROUTES.ABOUT} component={About} />
           <Footer />
          </div>
    		</Router>
    	);
	}
}

export default App;
