import React from 'react';
import { Link } from 'react-router';

const HomePage = () => (
	<div className='jumbotron'>
		<h1>Pluralsight Test</h1>
		<p>Example text</p>
		<Link to='about' className='btn btn-primary btn-lg'>Learn more</Link>
	</div>
);


export default HomePage;
