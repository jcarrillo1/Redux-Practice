import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			course: { title: '' }
		};
	}

	courseRow(course, index) {
		return <div key={index}>{course.title}</div>;
	}

	render() {
		const { courses } = this.props;
		return (
			<div>
				<h1>Course</h1>
				<CourseList courses={courses} />
			</div>
		);
	}
}

CoursesPage.propTypes = {
	actions: PropTypes.object.isRequired,
	courses: PropTypes.array.isRequired
};

function mapStateToProps(state) {
	return {
		courses: state.courses
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(courseActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
