import React, {useState, useEffect} from 'react'
import axios from 'axios'

function FetchWeatherData() {
    const [currentWeather, setCurrentWeather] = useState([{}])
    const [cityName, setCityName] = useState("")
    const [btnClick, setBtnClick] = useState("")
    const apiKey = '85301dd032151014792343f6f9bd1bab';

    useEffect(()=> {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${btnClick}&units=metric&appid=${apiKey}`)
            .then(res => {
                console.log(res)
                setCurrentWeather(res.data)
                setCityName("")
            })
            .catch(err => console.log(err))
    },[btnClick])

    const handleClick = () => {
        setBtnClick(cityName)

    }

  return (
    <div className='weather-container' >
        <input className='input' type="text" value={cityName} onChange={(e)=> setCityName(e.target.value)} />
        <button className='button' type='button' onClick={handleClick} >Check Weather</button>
        {
            typeof currentWeather.main === "undefined" ? (
                <div>
                    <p className='para' >Please enter city to check the current weather</p>
                </div>
            ): (
                <div className='weather-card' >
                    <p className='weather-temp' >{Math.round(currentWeather.main.temp)} <span>&#8451;</span> </p>
                    <img className='weather-icons' src={`http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`} alt='icon of current weather'></img>
                    <p className='weather-description' >{currentWeather.weather[0].main}</p>
                    <p className='weather-location' >{currentWeather.name}</p>

                </div>
            )
        }
    </div>
  )
}

export default FetchWeatherData