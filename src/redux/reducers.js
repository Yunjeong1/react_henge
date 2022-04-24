import { combineReducers } from 'redux';
import * as types from './actionsType';

const memberReducer = (state = { members: [] }, action) => {
	switch (action.type) {
		case types.MEMBER.start:
			return { ...state };

		case types.MEMBER.success:
			return { ...state, members: action.payload };

		case types.MEMBER.error:
			return { ...state, err: action.payload };

		default:
			return state;
	}
};

const youtubeReducer = (state = { youtube: [] }, action) => {
	switch (action.type) {
		case types.YOUTUBE.start:
			return { ...state };

		case types.YOUTUBE.success:
			return { ...state, youtube: action.payload };

		case types.YOUTUBE.error:
			return { ...state, err: action.payload };

		default:
			return state;
	}
};

const reducers = combineReducers({
	memberReducer,
	youtubeReducer,
});

export default reducers;