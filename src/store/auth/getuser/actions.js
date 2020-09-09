import { GET_USER, GET_USER_SUCCESSFUL, API_FAILED } from './actionTypes';

export const getuserApi = (history) => {
    return {
        type: GET_USER,
        payload: { history }
    }
}

export const getUserSuccessful = (user) => {
    return {
        type: GET_USER_SUCCESSFUL,
        payload: user
    }
}

export const apiError = (error) => {
    return {
        type: API_FAILED,
        payload: error
    }
}