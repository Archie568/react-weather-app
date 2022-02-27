import React from 'react';
import './App.css';
import Time from './componets/Time';
import FetchWeatherData from './FetchWeatherData';

const App = () => {


  

  return (
    <div>
      <h1 className='header' >Weather <span>App</span></h1>
      <Time />
      <FetchWeatherData />
    </div>
  )
}

export default App;
