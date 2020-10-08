import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

//Account Redux states
import { REGISTER_USER } from './actionTypes';
import { registerUserSuccessful, apiError } from './actions';

//AUTH related methods
import { setLoggeedInUser, postRegister } from '../../../helpers/authUtils';

// Is user register successfull then direct plot user in redux.
function* registerUser({ payload: { user } }) {
    try {
        const response = yield call(postRegister, '/api/v1/register', user);
        if (response === undefined) throw "Couldn't register.";
        setLoggeedInUser(response[0]);
        yield put(registerUserSuccessful(response));
    } catch (error) {
        yield put(apiError(error));
    }
}

export function* watchUserRegister() {
    yield takeEvery(REGISTER_USER, registerUser)
}

function* accountSaga() {
    yield all([fork(watchUserRegister)]);
}

export default accountSaga;