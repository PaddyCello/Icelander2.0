import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import Minitile from './Minitile'

const MultipleMarkers = () => {

  const [viewPort, setViewPort] = useState({
    latitude: 64.942827,
    longitude: -18.164241,
    zoom: 6,
    bearing: 0,
    pitch: 0
  })

  const [placeData, setPlaceData] = useState(null)
  console.log(setPlaceData)

  const [popup, setPopup] = useState(null)

  useEffect(() => {
    console.log(placeData)
    const getData = async () => {
      const response = await axios.get('/api/places')
      setPlaceData(response.data)
    }
    getData()
  }, [])
  console.log(popup)
 
  if (!placeData) return null
  return (
    <>
      <div className="map-container">
        <p className="map-caption">Click on an icon to find out more.</p>
        <ReactMapGL
          {...viewPort}
          onViewportChange={(viewPort) => setViewPort(viewPort)}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          height='100%'
          width='100%'
          mapStyle='mapbox://styles/mapbox/light-v10'
        >
          {placeData.map(place => {
            return <Marker key={place._id} latitude={place.latitude} longitude={place.longitude}>
              <span onClick={() => setPopup(place)} className="icon-main-map">
                {place.icon}
              </span>
            </Marker>
          })}
          {popup &&
            <Popup
              latitude={popup.latitude}
              longitude={popup.longitude}
              closeOnClick={false}
              onClose={() => setPopup(null)}
            >
              <Minitile {...popup} />
            </Popup>
          }
        </ReactMapGL>
      </div>
    </>
  )

}


export default MultipleMarkers