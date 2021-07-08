import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'


const Home = () => {

  return (
    <>
      <div className="homepage">
        <div className="homepage-container">
          <img className="logo-homepage" src='/assets/logo_white_large.jpeg' />
          <p className="homepage-subtitle">Get behind the wheel and explore.</p>
          <div className="homepage-buttons">
            <Link to={'/packages'}>
              <Button className="button" value="packages">EXPLORE ALL PACKAGES</Button>{' '}
            </Link>
            <Link to={'/map'}>
              <Button className="button" value="map">CREATE CUSTOM TRIP</Button>{' '}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home