import React, { Component } from 'react';

import { Redirect } from 'react-router';

import * as ROUTES from '../../constants/routes';

class Landing extends Component {
	render() {
		return (
    		<Redirect to={ROUTES.PROJECTS} />
    	);
	}
}

export default Landing;
