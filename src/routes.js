import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/courses/CoursesPage';
import ManageCoursePage from './components/courses/ManageCoursePage';

export default (
	<Route path='/' component={App}>
		<IndexRoute component={HomePage} />
		<Route path='about' component={AboutPage} />
		<Route path='course' component={ManageCoursePage} />
		<Route path='course/:id' component={ManageCoursePage} />
		<Route path='courses' component={CoursesPage} />
	</Route>
);
