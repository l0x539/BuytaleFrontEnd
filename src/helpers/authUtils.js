import axios from 'axios';

//Set the logged in user data in local session 
const setLoggeedInUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
}

// Gets the logged in user data from local session 
// const getLoggedInUser = () => {
//     const user = localStorage.getItem('user');
//     if (user)
//         return JSON.parse(user);
//     return null;
// }

const isUserAuth = () => {
    return axios.get("/api/v1/loggedin").then(response => {
        if (response.status === 400 || response.status === 500)
            return false
        return true;
    }).catch(err => {
        return false
    });
}

const deleteUserLocalStorage = () => {
    localStorage.removeItem("user");
    axios.get("/api/v1/logout").then(r => null)
    .catch(err => null);
}

const getLoggedInUser = () => {
        if(!localStorage.getItem('user')) return null;
        return JSON.parse(localStorage.getItem('user'));
}

//is user is logged in
const isUserAuthenticated = () => {
    return getLoggedInUser() !== null;
}

// Get User
const getUser = (url) => {
    return axios.get(url).then(response => {
        if (response.status === 400 || response.status === 500)
            throw response.data;
        return response.data;
    }).catch(err => {
        throw err[1];
    });
}

// Register Method
const postRegister = (url, data) => {
    return axios.post(url, data).then(response => {
        if (response.status >= 200 || response.status <= 299)
            return response.data;
        return response.data;
    }).catch(err => {
        var message;
        if (err.response && err.response.status ) {
            switch (err.response.status) {
                case 404: message = "Sorry! the page you are looking for could not be found"; break;
                case 500: message = "Sorry! something went wrong, please contact our support team"; break;
                case 401: message = "Invalid credentials"; break;
                default: message = err[1]; break;
            }
        }
        return message;
    });

}

// Login Method
const postLogin = (url, data) => {
    return axios.post(url, data).then(response => {
        console.log(response.status);
        if (response.status === 400 || response.status === 500)
            return response.data;
        return response.data;
    }).catch(err => {
        return err[1];
    });
}

// postForgetPwd 
const postForgetPwd = (url, data) => {
    return axios.post(url, data).then(response => {
        if (response.status === 400 || response.status === 500)
            throw response.data;
        return response.data;
    }).catch(err => {
        throw err[1];
    });
}


export { isUserAuth, deleteUserLocalStorage, setLoggeedInUser, getLoggedInUser, getUser, isUserAuthenticated, postRegister, postLogin, postForgetPwd }