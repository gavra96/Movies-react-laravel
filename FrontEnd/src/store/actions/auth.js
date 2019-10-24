import * as actionTypes from './actionTypes';
import axios from 'axios'; 
// TO DO setup default axios instance 
// header setup for axios if user is loged in 
//{
  //  headers: {
    //  Authorization: 'Bearer ' + myToken
    //}
 // }

export const authStart = () => {
    return {
        type : actionTypes.AUTH_START
    };
};

export const authSuccess = (token, user) => {
    return {
        type : actionTypes.AUTH_SUCCESS,
        token : token,
        user : user
    };
};

export const authFail = (error) => {
    return {
        type : actionTypes.AUTH_FAIL,
        error : error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    return {
        type : actionTypes.AUTH_LOGOUT
    };
};

// TO DO auto loging

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email,
            password
        };
        axios.post('http://localhost:8001/api/login', authData, {
            Accept : 'application/json'
        }).then(response => {
            console.log(response);
            localStorage.setItem('token', response.data.access_token);
            localStorage.setItem('expireIn', response.data.expireIn);
            dispatch(authSuccess(response.data.access_token, response.data.user));
        }).catch(error => {
            dispatch(authFail(error.response.data.message));
        });
    };
};