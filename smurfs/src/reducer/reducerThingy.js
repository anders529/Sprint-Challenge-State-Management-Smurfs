import {
        START_GRAB_SMURF,
        GRAB_SMURF_COMPLETE,
        GRAB_SMURFS_FAILED,
        ADDING_SMURF,
        ADD_SMURF} from '../actions/actionThingy.js';
const initialState = {
    smurfs: [],
    isGrabbing: false,
    error:''
};
export const reducerThingy = (state = initialState, action) => {
    switch (action.type) {
        case START_GRAB_SMURF: return {...state, isGrabbing: true, error: ''};
        case GRAB_SMURF_COMPLETE: return {...state, smurfs: action.payload, isGrabbing: true, error: ''};
        case GRAB_SMURFS_FAILED: return {...state,isGrabbing: true, error: action.payload};
        case ADDING_SMURF: return {...state,isGrabbing:true,error: ''};
        case ADD_SMURF: return {...state,isGrabbing: true, error: '', smurfs: action.payload};
        default: return state;}};