import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LargeTile from './LargeTile'
import Navbar from '../Navbar'
import Carousel from 'react-bootstrap/Carousel'

const AllPackages = () => {

  const [packages, setPackages] = useState(null)
  const options = ['Summer', 'Winter', 'All']

  const handleClick = async (event) => {
    const { data } = await axios.get(`/api/packages/?season=${event.target.value}`)
    setPackages(data)
  }

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/packages')
      setPackages(data)
    }
    getData()
  }, [])

  if (!packages) return null

  return (
    <>
      <div className="packages-shadow">
      </div>
      <div className="caption">
        <p className="p-caption">Explore Iceland</p>
      </div>
      <Navbar className="nav-grey" />
      <div div className="packages-container">
        <div>
          <Carousel id="carousel-container">
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="carousel-image"
                src="/assets/jeremy-bishop-h7bQ8VEZtws-unsplash.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="carousel-image"
                src="/assets/jon-flobrant-tSsb28hzZSI-unsplash.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="carousel-image"
                src="/assets/daniel-schoibl-oRNruBJQqfo-unsplash.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="scroll-filter" >
          <div className="button-bar">
            <div className="drop-downs">
            </div>
          </div>
          <div className="filters">
            {options.map(item => (
              <button className="filter-button" key={item} value={item} onClick={handleClick}>{item}</button>
            ))}
          </div>
          <ul className="packages-ul" id="no-scroll1">
            {packages.map(trip => (
              <LargeTile key={trip._id} {...trip} />
            ))}
          </ul>
        </div>
      </div>
    </>
  )

}

export default AllPackages
