import React, {useState, useEffect} from 'react'

const Time = () => {
    const   [date, setDate] = useState(new Date())

    const interV = () => {
        setDate(new Date())
    }

    useEffect(()=> {
        const timerId = setInterval(() => interV(), 1000);
        return function cleanUp() {
            clearInterval(timerId)
        }
    })

  return (
    <div>
        <p className='timer' >{date.toLocaleTimeString()}</p>
    </div>
  )
}

export default Time