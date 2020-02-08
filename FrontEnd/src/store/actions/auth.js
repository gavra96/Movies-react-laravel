import * as actionTypes from './actionTypes';
import axios from 'axios'; 
import moment from 'moment';


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
    localStorage.removeItem('expireIn');
    return {
        type : actionTypes.AUTH_LOGOUT
    };
};

// attempt to delete access_token on laravel backend
export const attemptLogout = () => {
    return dispatch => {
    const user = localStorage.getItem('token');
    if(user){
        axios.post('http://localhost:8888/api/logout', null, {
            Accept : 'application/json',
            headers: {
            Authorization: 'Bearer ' + user
            }
        }).then(response => {
            dispatch(logout());
        }).catch(error => {
            dispatch(authFail(error.response.data.message));
        });

        }
    }
}


// auto login if reload page
export const authAttempt = () => {
    return dispatch => {
        const expireIn = localStorage.getItem('expireIn');
        const token = localStorage.getItem('token');

        if(token && expireIn){
            
            const currentTime = moment().format();
            let splitexpireIn = expireIn.split(".");
            let splitcurrentTime = currentTime.split("+");

            if(splitcurrentTime[0] < splitexpireIn[0]){
                axios.post('http://localhost:8888/api/getUserByToken', null, {
                    Accept : 'application/json',
                    headers: {
                    Authorization: 'Bearer ' + token
                    }
                }).then(response => {
                    dispatch(authSuccess(token, response.data));
                }).catch(error => {
                    console.log(error);
                });
            }else{
                dispatch(logout());
            }
        }
    }

}


export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email,
            password
        };
        axios.post('http://localhost:8888/api/login', authData, {
            Accept : 'application/json'
        }).then(response => {
            //console.log(response);
            localStorage.setItem('token', response.data.access_token);
            localStorage.setItem('expireIn', response.data.expireIn);
            dispatch(authSuccess(response.data.access_token, response.data.user));
        }).catch(error => {
            dispatch(authFail(error.response.data.message));
        });
    };
};