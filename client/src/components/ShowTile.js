import React from 'react'
import Media from 'react-bootstrap/Media'


const ShowTile = ({ typeOfDestination, nameOfDestination, image, description }) => {

  return (
    <>
      <li className="show">
        <Media>
          <Media.Body>
            <h4 className="type-title">{typeOfDestination} : {nameOfDestination}</h4>
            <p className="show-p">
              <img
                width={250}
                height={150}
                className="float-left mr-2 mb-1"
                src={image}
                alt="Generic placeholder"
              />
              {description}
            </p>
          </Media.Body>
        </Media>
      </li>
    </>
  )
}

export default ShowTile