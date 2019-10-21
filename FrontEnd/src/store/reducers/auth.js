import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    token : null,
    user : null,
    message : null,
    error : null
};

const reducer = (state, action) => {
    switch(action.type){
        // TO DO
        // For updating the state use updateObject function!
        default : return state; 
    }
};

export default reducer;