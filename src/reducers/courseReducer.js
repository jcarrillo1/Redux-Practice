import * as types from '../constants/actionTypes';

export default function courseReducer(state = [], action) {
	switch (action.type) {
	case types.LOAD_COURSES_SUCCESS:
		return action.courses;
	case types.CREATE_COURSE_SUCCESS:
		return [
			...state,
			Object.assign({}, action.course)
		];
	default:
		return state;
	}
}
