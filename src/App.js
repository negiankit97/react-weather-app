import React from 'react';
import {Route} from 'react-router-dom';
import WeatherReport from './components/WeatherReport';

function App() {
  return (
    <div className="App">
      <Route exact path="/" render ={(props) => <WeatherReport {...props}/>} /> 
    </div>
  );
}

export default App;
