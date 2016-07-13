import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			course: Object.assign({}, props.course),
			errors: {}
		};
		this.updateCourseState = this.updateCourseState.bind(this);
	}

	updateCourseState(e) {
		const field = e.target.name;
		const course = this.state.course;
		course[field] = e.target.value;
		return this.setState({ course });
	}

	render() {
		return (
			<CourseForm
				allAuthors={this.props.authors}
				course={this.state.course}
				errors={this.state.errors}
				onChange={this.updateCourseState}
			/>
		);
	}
}

ManageCoursePage.propTypes = {
	actions: PropTypes.object.isRequired,
	authors: PropTypes.array.isRequired,
	course: PropTypes.object
};

function mapStateToProps(state) {
	const course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };
	const authorsFormattedForDropdown = state.authors.map(author => ({
		value: author.id,
		text: `${author.firstName} ${author.lastName}`
	}));

	return {
		course,
		authors: authorsFormattedForDropdown
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(courseActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
