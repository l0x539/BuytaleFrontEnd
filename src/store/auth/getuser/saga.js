import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

// Login Redux States
import { GET_USER_SUCCESSFUL } from './actionTypes';
import {  apiError, getUserSuccessful } from './actions';

// AUTH related methods
import { setLoggeedInUser,getUser } from '../../../helpers/authUtils';


function* getuser ({ payload: {history} }) {
    console.log("hi");
    try {
        const response = yield call(getUser, '/api/v1/@me');
        setLoggeedInUser(response[0]);
        yield put(getUserSuccessful(response[0]));
    } catch (error) {
        yield put(apiError(error));
    }
}

export function* watchGetUser() {
    yield takeEvery(GET_USER_SUCCESSFUL, getuser)
}

function* getuserSaga() {
    yield all([fork(watchGetUser)]);
}

export default getuserSaga;