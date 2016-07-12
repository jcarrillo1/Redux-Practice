import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';

class ManageCoursePage extends Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (

		);
	}
}

CoursesPage.propTypes = {
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	return {
		state
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(courseActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
