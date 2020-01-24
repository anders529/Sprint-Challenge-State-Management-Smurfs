import React from 'react';
import Smurfs from './Smurfs.js';
import SmurfForm from './SmurfForm.js';
import {grabSmurfs, addSmurfs} from '../actions/actionThingy.js'
import {connect} from 'react-redux';
import './App.css';
const App = props => {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>
        <Smurfs getSmurfs={props.grabSmurfs} smurfs={props.smurfs} isFetching={props.isFetching}/>
      </div>
        <SmurfForm addSmurfs={props.addSmurfs}/>
      </div>
    );};
const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }};
const mapDispatchToProps = { grabSmurfs, addSmurfs };
export default connect(mapStateToProps, mapDispatchToProps)(App);