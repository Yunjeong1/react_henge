import { takeLatest, all, fork, put, call } from 'redux-saga/effects';
import { getYoutube, getMember } from './api';
import * as types from './actionsType';
import { type } from '@testing-library/user-event/dist/type';

export function* returnYoutube() {
	try {
		const response = yield call(getYoutube);
		yield put({ type: types.YOUTUBE.success, payload: response.data.items });
	} catch (err) {
		yield put({ type: types.YOUTUBE.error, payload: err });
	}
}
export function* callYoutube() {
	yield takeLatest(types.YOUTUBE.start, returnYoutube);
}

export function* returnMember() {
	try {
		const reponse = yield call(getMember);
		yield put({ type: types.MEMBER.success, payload: reponse.data.data });
	} catch (err) {
		yield put({ type: types.MEMBER.error, payload: err });
	}
}

export function* callMember() {
	yield takeLatest(types.MEMBER.start, returnMember);
}

export default function* rootSaga() {
	yield all([fork(callYoutube), fork(callMember)]);
}
