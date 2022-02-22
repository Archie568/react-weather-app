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
    <div>
        <input className='input' type="text" value={cityName} onChange={(e)=> setCityName(e.target.value)} />
        <button type='button' onClick={handleClick} >Check Weather</button>
        {
            typeof currentWeather.main === "undefined" ? (
                <div>
                    <p>Please enter city to check the current weather</p>
                </div>
            ): (
                <div>
                    <p>{currentWeather.name}</p>
                    <p>{Math.round(currentWeather.main.temp)} <span>&#8451;</span> </p>
                    <p>{currentWeather.weather[0].main}</p>
                    <p>{currentWeather.sys.country}</p>
                </div>
            )
        }
    </div>
  )
}

export default FetchWeatherData