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

export const authSuccess = (authData) => {
    return {
        type : actionTypes.AUTH_SUCCESS,
        authData : authData
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
        dispatch(authStart);
        const authData = {
            email,
            password
        };
        axios.post('localhost:8001/api/login', authData, {
            Accept : 'application/json'
        }).then(response => {
            console.log(response);
            //localStorage.setItem('token', response.data.token); 
            //dispatch(authSuccess(response.data.token, response.data.user)); check from console log first
        }).catch(error => {
            console.log(error);
            //dispatch(authFail(error.response.message)); console log first
        });
    };
};