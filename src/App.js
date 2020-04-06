import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Home from './Home';


function App() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p onClick={() => dispatch({type: 'ADD'})}>
          {state.testReducer}
        </p>
        <div>
          // test
          <div>
            {state.userKey}
          </div>
          <button onClick={() => dispatch({type: 'SET', value: 'gaosen'})}> set key</button>
          <button onClick={() => dispatch({type: 'CLEAR', value: null})}> clear</button>
        </div>
      </header>
      <Home />
    </div>
  );
}

export default App;
