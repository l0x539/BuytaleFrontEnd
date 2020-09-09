import { combineReducers  } from 'redux';

// Front
import Layout from './layout/reducer';

import Breadcrumb from "./Breadcrumb/reducer";

// Authentication Module
import Account from './auth/register/reducer';
import Login from './auth/login/reducer';
import Forget from './auth/forgetpwd/reducer';
import Getuser from './auth/getuser/reducer';

const rootReducer = combineReducers({

    // public
    Layout,

    //Breadcrumb items
    Breadcrumb,

    // Authentication
    Account,
    Login,
    Forget,
    Getuser,

});

export default rootReducer;