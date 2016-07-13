import React, { PropTypes } from 'react';
import Header from './common/Header';

const App = (props) => (
	<div className='container-fluid'>
		<Header />
		{props.children}
	</div>
);

App.propTypes = {
	children: PropTypes.object.isRequired
};

export default App;
