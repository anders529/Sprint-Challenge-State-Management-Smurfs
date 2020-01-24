import React from 'react';
import Smurfs from './Smurfs.js';
import SmurfForm from './SmurfForm.js';
import {getSmurfs, addSmurfs} from '../actions/smurfActionThingy.js'
import {connect} from 'react-redux';
import './App.css';
const App = props => {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>
        <Smurfs getSmurfs={props.getSmurfs} smurfs={props.smurfs} isFetching={props.isFetching}/>
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
const mapDispatchToProps = { getSmurfs, addSmurfs };
export default connect(mapStateToProps, mapDispatchToProps)(App);