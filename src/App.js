import React from 'react';
import {Route} from 'react-router-dom';
import WeatherReport from './components/WeatherReport';
import CurrentWeatherReport from './components/CurrentWeatherReport';

function App() {
  return (
    <div className="App">
      <Route exact path="/" render ={(props) => <WeatherReport {...props}/>} />
      <Route exact path="/weather" render ={(props) => <CurrentWeatherReport {...props}/>} />
    </div>
  );
}

export default App;
