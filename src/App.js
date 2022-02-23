import React from 'react';
import './App.css';
import FetchWeatherData from './FetchWeatherData';

const App = () => {


  

  return (
    <div>
      <h1 className='header' >Weather <span>App</span></h1>
      <FetchWeatherData />
    </div>
  )
}

export default App;
