//! Look into HTTPOnly cookies as a more secure alternative to localStorage

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import GetMyPlaces from './GetMyPlaces'

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
      <Link to='/profile/getmyplaces'>
        <GetMyPlaces {...userData} />
      </Link>
    </>
  )
}

export default UserProfile
