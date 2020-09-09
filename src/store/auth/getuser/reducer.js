import { GET_USER } from './actionTypes';

const initialState = {
    user_uuid: null,
    email: null,
    more_emails: null,
    firstname: null,
    lastname: null,
    registered: null,
    last_login: null,
    login_attemp: null,
    verified: null,
    last_updated: null
}

const getuser = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            state = {
                ...state,                
            }
            break;
        default:
            state = { ...state };
            break;
    }
    return state;
}

export default getuser;