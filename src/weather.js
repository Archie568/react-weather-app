import React from 'react'

const Weather = ({name, temp}) => {
  return (
    <div>
        <p>{name}</p>
        <p>{temp}</p>
    </div>
  )
}

export default Weather