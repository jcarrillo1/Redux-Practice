import * as types from '../constants/actionTypes';
import authorApi from '../api/mockAuthorApi';

export function loadAuthorsSuccess(authors) {
	return {
		type: types.LOAD_AUTHORS_SUCCESS,
		authors
	};
}

export function loadAuthors() {
	return dispatch => (
		authorApi.getAllAuthors().then(authors => {
			dispatch(loadAuthorsSuccess(authors));
		}).catch(err => {
			throw (err);
		})
	);
}
