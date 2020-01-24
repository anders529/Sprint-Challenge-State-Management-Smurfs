import axios from 'axios';
export const START_GRAB_SMURF = 'START_GRAB_SMURF';
export const GRAB_SMURF_COMPLETE = 'GRAB_SMURF_COMPLETE';
export const GRAB_SMURFS_FAILED = 'GRAB_SMURFS_FAILED';
export const ADDING_SMURF = 'ADDING_SMURF';
export const ADD_SMURF = 'ADD_SMURF';
export const grabSmurfs = () => {
return dispatch => {
    dispatch({type:START_GRAB_SMURF});
    axios.get('http://localhost:3333/smurfs')
        .then(response => {
            dispatch({type:GRAB_SMURF_COMPLETE, payload: response.data});
        })
        .catch(error => {
            dispatch({type:GRAB_SMURFS_FAILED, payload: error})
        })}};
export const addSmurfs = smurfs => {
return dispatch => {
    dispatch({type:ADDING_SMURF});
    axios.post('http://localhost:3333/smurfs', smurfs)
        .then(response => {
            dispatch({type:ADD_SMURF, payload:response.data})
        })
        .catch(error => {
            console.log(error);
        })}};