import React from 'react'
import { Link } from 'react-router-dom'


const LargeTile = ({ packageNumber, _id, image, name, duration, season, price, description }) => {

  return (
    <>
      <Link to={`/packages/${packageNumber}`} style={{ textDecoration: 'none' }}>
        <li className="packages-li" key={_id}>
          <div className="packages-li-container">
            <img src={image} className="package-background" key={_id} />
            <div className="left">
              <div className="package-title">
                {name}
              </div>
              <div className="right" >
                <ul className="package-details-ul">
                  <li className="package-details">
                    {duration} days
                  </li>
                  <li className="package-details">
                    {season}
                  </li>
                  <li className="package-details">
                    £{price}pp
                  </li>
                </ul>
              </div>
            </div>
            <div className="description-tile">
              <div className="hover-area">
                <p className="tile-description">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </li >
      </Link>

    </>
  )
}

export default LargeTile
