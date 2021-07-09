import React, { useEffect, useState } from 'react'
import axios from 'axios'

const GetMyPlaces = () => {
  const [allMyPlaces, setAllMyPlaces] = useState(null)

  useEffect(() => {
    const getPlaces = async () => {
      const token = window.localStorage.getItem('token')
      const { data } = await axios.get('/api/profile/getmyplaces', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setAllMyPlaces(data)
    }
    getPlaces()
  }, [])

  if (!allMyPlaces) return null

  return (
    <>
      <div className="saved-container">
        <p className="saved-places-caption">My saved places:</p>
        <ul className="saved-ul">
          {allMyPlaces.map(place => {
            return (
              <li key={place._id} className="saved-li">
                <h1 className="saved-title">{place.nameOfDestination}</h1>
                <img
                  className="saved-img"
                  src={place.image}
                />
                <p className="hidden-lat">Average Rating: {place.avgRating}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </>

  )
}

export default GetMyPlaces