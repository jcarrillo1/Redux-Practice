import * as types from '../constants/actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
	return {
		type: types.LOAD_COURSES_SUCCESS,
		courses
	};
}

export function createCourseSuccess(course) {
	return {
		type: types.CREATE_COURSE_SUCCESS,
		course
	};
}

export function updateCourseSuccess(course) {
	return {
		type: types.UPDATE_COURSE_SUCCESS,
		course
	};
}

export function loadCourses() {
	return dispatch => (
		courseApi.getAllCourses().then(courses => {
			dispatch(loadCoursesSuccess(courses));
		}).catch(err => {
			throw (err);
		})
	);
}

export function saveCourse(course) {
	return dispatch => (
		courseApi.saveCourse(course).then(savedCourse => (
			course.id ?
				dispatch(updateCourseSuccess(savedCourse)) :
				dispatch(createCourseSuccess(savedCourse))
		)).catch(err => {
			throw (err);
		})
	);
}
