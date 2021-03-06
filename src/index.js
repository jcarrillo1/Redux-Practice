import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
import { loadCourses } from './actions/courseActions';
import { loadAuthors } from './actions/authorActions';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>,
	document.getElementById('app')
);

module.hot.accept();
