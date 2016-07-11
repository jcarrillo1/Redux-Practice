import React, { PropTypes } from 'react';
import Header from './common/Header';

const App = (props) => (
	<div className="container-fluid">
		<Header />
		{props.children}
	</div>
);

export default App;
