import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.css';
import '../../queries.css';

class Footer extends Component {
	render() {
		return (
			<footer>
				<div className="container">
					<h3>Contact Me</h3>
		    		<a href="https://github.com/MatthewLacey" target="_blank" rel="noopener noreferrer" title="View my GitHub Page">
		    			<FontAwesomeIcon icon={['fab', 'github']} className="footIcons" />
		    		</a>
		    		<a href="https://www.linkedin.com/in/matthewalanlacey/" target="_blank" rel="noopener noreferrer" title="Visit me on LinkedIn">
		    			<FontAwesomeIcon icon={['fab', 'linkedin-in']} className="footIcons" />
		    		</a>
		    		<a href='&#109;ailto&#58;&#99;%6Fn&#116;act&#64;mlac%&#54;5y%&#50;&#69;io'>
		    			<FontAwesomeIcon icon="at" className="footIcons" />
		    		</a>
		    	</div>
		    </footer>
    	);
	}
}

export default Footer;
