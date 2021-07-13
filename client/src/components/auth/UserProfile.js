//! Look into HTTPOnly cookies as a more secure alternative to localStorage
//? No longer need to pass props into link to GetMyPlaces; also, probably just needs to be component instead of Link

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import GetMyPlaces from './GetMyPlaces'
import { Carousel } from 'react-bootstrap'

const UserProfile = () => {


  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      const token = window.localStorage.getItem('token')
      const response = await axios.get('/api/profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setUserData(response.data)
    }
    getUser()
  }, [])

  if (!userData) return null
  console.log(userData)
  
  return (
    <>
      <div>
        <div className="packages-shadow">

        </div>
        <div className="saved-overall-container">
          <Carousel id="carousel-container" className="saved-carousel">
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="carousel-image"
                src="/assets/jonatan-pie-iokiwAq05UU-unsplash (1).jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="carousel-image"
                src="/assets/landon-arnold-PMdiRXbAbhY-unsplash.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="carousel-image"
                src="/assets/rory-hennessey-_NHfYFX0L2E-unsplash.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="saved-container">
          <Link to='/profile/getmyplaces'>
            <GetMyPlaces />
          </Link>
          <div className="caption">
            <p className="welcome-caption">Welcome Back, {userData.username}!</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserProfile
