import axios from 'axios';
export const START_GRAB_SMURF = 'START_GRAB_SMURF';
export const GRAB_SMURF_COMPLETE = 'GRAB_SMURF_COMPLETE';
export const GRAB_SMURFS_FAILED = 'GRAB_SMURFS_FAILED';
export const ADDING_SMURF = 'ADDING_SMURF';
export const ADD_SMURF = 'ADD_SMURF';
export const ADDING_SMURF_COMPLETE = 'ADDING_SMURF_COMPLETE';
export const grabSmurfs = () => {
return render => {
    render({type:START_GRAB_SMURF});
    axios.get('http://localhost:3333/smurfs')
        .then(response => {
            render({type:GRAB_SMURF_COMPLETE});
        })
        .catch(error => {
            render({type:GRAB_SMURFS_FAILED})
        })}};
export const addSmurfs = smurf => {
return render => {
    render({type:ADDING_SMURF});
    axios.post('http://localhost:3333/smurfs', smurf)
        .then(response => {
            render({type:ADD_SMURF, payload:response.data})
        })
        .catch(error => {
            console.log(error);
        })}};