//! Look into how to check query value against object key. Or, will I have to completely redesign schema?

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ShowTile from './ShowTile'
import Button from 'react-bootstrap/Button'


const ShowPackageTile = () => {

  const { id } = useParams()
  const [locations, setLocations] = useState([])
  const [day, setDay] = useState([])
  const [duration, setDuration] = useState(null)



  const handleClick = (event) => {
    setDay(event.target.value)
  }

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/places')

      const dayOne = data.filter(item => {
        return (item.packages.includes(parseInt(id)) && item.day1 === true)
      })
      const dayTwo = data.filter(item => {
        return (item.packages.includes(parseInt(id)) && item.day2 === true)
      })
      const dayThree = data.filter(item => {
        return (item.packages.includes(parseInt(id)) && item.day3 === true)
      })
      const dayFour = data.filter(item => {
        return (item.packages.includes(parseInt(id)) && item.day4 === true)
      })
      const dayFive = data.filter(item => {
        return (item.packages.includes(parseInt(id)) && item.day5 === true)
      })
      const daySix = data.filter(item => {
        return (item.packages.includes(parseInt(id)) && item.day6 === true)
      })
      const daySeven = data.filter(item => {
        return (item.packages.includes(parseInt(id)) && item.day7 === true)
      })
      const dayEight = data.filter(item => {
        return (item.packages.includes(parseInt(id)) && item.day8 === true)
      })
      const dayNine = data.filter(item => {
        return (item.packages.includes(parseInt(id)) && item.day9 === true)
      })
      const dayTen = data.filter(item => {
        return (item.packages.includes(parseInt(id)) && item.day10 === true)
      })

      if (day === 'dayOne') {
        setLocations(dayOne)
      } else if (day === 'dayTwo') {
        setLocations(dayTwo)
      } else if (day === 'dayThree') {
        setLocations(dayThree)
      } else if (day === 'dayFour') {
        setLocations(dayFour)
      } else if (day === 'dayFive') {
        setLocations(dayFive)
      } else if (day === 'daySix') {
        setLocations(daySix)
      } else if (day === 'daySeven') {
        setLocations(daySeven)
      } else if (day === 'dayEight') {
        setLocations(dayEight)
      } else if (day === 'dayNine') {
        setLocations(dayNine)
      } else if (day === 'dayTen') {
        setLocations(dayTen)
      } else {
        setLocations(dayOne)
      }
    }
    getData()
  }, [day])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/packages')
      const durationData = data[id - 1].duration
      setDuration(durationData)
    }

    getData()
  }, [duration])

  if (!locations || !duration) return null

  return (
    <>
      <div className="button-container">
        <h6>Day:</h6>
        <Button className="day-button" variant="outline-secondary" value="dayOne" onClick={handleClick}>1</Button>
        <Button className="day-button" variant="outline-secondary" value="dayTwo" onClick={handleClick}>2</Button>
        <Button className="day-button" variant="outline-secondary" value="dayThree" onClick={handleClick}>3</Button>
        <Button className="day-button" variant="outline-secondary" value="dayFour" onClick={handleClick}>4</Button>
        {duration >= 5 ?
          <Button className="day-button" variant="outline-secondary" value="dayFive" onClick={handleClick}>5</Button>
          : null}
        {duration >= 6 ?
          <Button className="day-button" variant="outline-secondary" value="daySix" onClick={handleClick}>6</Button>
          : null}
        {duration >= 7 ?
          <Button className="day-button" variant="outline-secondary" value="daySeven" onClick={handleClick}>7</Button>
          : null}
        {duration >= 8 ?
          <Button className="day-button" variant="outline-secondary" value="dayEight" onClick={handleClick}>8</Button>
          : null}
        {duration >= 9 ?
          <Button className="day-button" variant="outline-secondary" value="dayNine" onClick={handleClick}>9</Button>
          : null}
        {duration >= 10 ?
          <Button className="day-button" variant="outline-secondary" value="dayTen" onClick={handleClick}>10</Button>
          : null}
      </div>
      <div className="days-container">
        <ul className="show-stuff">
          {locations.map(item => {
            return <ShowTile
              key={item._id}
              {...item}
            />
          })}
        </ul>
      </div>
    </>
  )

}

export default ShowPackageTile

