import React, { Component } from 'react';
import './devicon-master/devicon.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profpic from'./me.JPG';
import './about.css';

class About extends Component {
	constructor(props) {
        super(props);
        this.increment = this.increment.bind(this);
        this.index= 0;
    }

    increment(index) {
    	this.index = index+1
        return this.index;
    }

  render() {
    return (
    	<section className='about'>
    		<div className='container'>
    			<div className='clearfix animated fadeIn'>
	    			<div className='words'>
			    		<h1>About Me</h1>
			    		<p>Hi, I'm Matt and I am a computer science student at Santa Clara University. I've lived in the heart of Los Angeles and in remote Colorado mountain towns, but Northern California is where I have always called home. My hobbies include snowboarding, backpacking, reading, and playing the drums.</p>
			    	</div>
			    	<img  src={profpic} alt="A very attractive man."/>
			    </div>
			</div>
			<div className='skills'>
		    	<div className='container'>
			    	<h2>Skills</h2>
			    	<ul>
		    			<li className="animated flipInY" style={{animationDelay:((this.increment(this.index))/10)+'s'}}>
		    				<i className="devicon-html5-plain"></i>
		    			</li>
		    			<li className="animated flipInY" style={{animationDelay:((this.increment(this.index))/10)+'s'}}>
		    				<i className="devicon-css3-plain"></i>
		    			</li>
		    			<li className="animated flipInY" style={{animationDelay:((this.increment(this.index))/10)+'s'}}>
		    				<i className="devicon-javascript-plain"></i>
		    			</li>
		    			<li className="animated flipInY" style={{animationDelay:((this.increment(this.index))/10)+'s'}}>
		    				<i className="devicon-java-plain"></i>
		    			</li>
		    			<li className="animated flipInY" style={{animationDelay:((this.increment(this.index))/10)+'s'}}>
		    				<i className="devicon-c-plain"></i>
		    			</li>
		    			<li className="animated flipInY" style={{animationDelay:((this.increment(this.index))/10)+'s'}}>
		    				<i className="devicon-cplusplus-plain"></i>
		    			</li>
		    			<li className="animated flipInY" style={{animationDelay:((this.increment(this.index))/10)+'s'}}>
		    				<i className="devicon-react-plain"></i>
		    			</li>
		    			<li className="animated flipInY" style={{animationDelay:((this.increment(this.index))/10)+'s'}}>
		    				<i className="devicon-babel-plain"></i>
		    			</li>
		    			<li className="animated flipInY" style={{animationDelay:((this.increment(this.index))/10)+'s'}}>
		    				<i className="devicon-webpack-plain"></i>
		    			</li>
		    			<li className="animated flipInY" style={{animationDelay:((this.increment(this.index))/10)+'s'}}>
		    				<i className="devicon-nodejs-plain"></i>
		    			</li>
		    			<li className="animated flipInY" style={{animationDelay:((this.increment(this.index))/10)+'s'}}>
		    				<i className="devicon-git-plain"></i>
		    			</li>
		    			<li className="animated flipInY" style={{animationDelay:((this.increment(this.index))/10)+'s'}}>
		    				<FontAwesomeIcon icon={['fab', 'github-alt']} />
		    			</li>
		    			<li className="animated flipInY" style={{animationDelay:((this.increment(this.index))/10)+'s'}}>
		    				<i className="devicon-bootstrap-plain"></i>
		    			</li>
		    			<li className="animated flipInY" style={{animationDelay:((this.increment(this.index))/10)+'s'}}>
		    				<i className="devicon-swift-plain"></i>
		    			</li>
		    			<li className="animated flipInY" style={{animationDelay:((this.increment(this.index))/10)+'s'}}>
		    				<i className="devicon-gimp-plain"></i>
		    			</li>
		    			<li className="animated flipInY" style={{animationDelay:((this.increment(this.index))/10)+'s'}}>
		    				<i className="devicon-inkscape-plain"></i>
		    			</li>
		    			<li className="animated flipInY" style={{animationDelay:((this.increment(this.index))/10)+'s'}}>
		    				<i className="devicon-photoshop-plain"></i>
		    			</li>
		    			<li className="animated flipInY" style={{animationDelay:((this.increment(this.index))/10)+'s'}}>
		    				<i className="devicon-illustrator-plain"></i>
		    			</li>
		    		</ul>
		    	</div>
	    	</div>
    	</section>
    );
  }
}

export default About;
