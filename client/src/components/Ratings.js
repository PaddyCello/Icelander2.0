import React, { useState } from 'react'
import axios from 'axios'

const Star = ({ marked, starId }) => {
  return (
    <span data-star-id={starId} className="star" role="button">
      {marked ? '\u2605' : '\u2606'}
    </span>
  )
}

const StarRating = ({ value, ..._id }) => {
  const [rating, setRating] = useState(parseInt(value) || 0)
  const [selection, setSelection] = useState(0)

  const hoverOver = event => {
    let val = 0
    if (event && event.target && event.target.getAttribute('data-star-id'))
      val = event.target.getAttribute('data-star-id')
    setSelection(val)
  }

  const handleClick = async (event) => {
    const choice = parseInt(event.target.getAttribute('data-star-id'))
    const token = window.localStorage.getItem('token')
    const response = await axios.post(`/api/places/${_id._id}/ratings`, { rating: choice }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log(response, setRating)
  }
  return (
    <div
      onMouseOut={() => hoverOver(null)}
      onClick={handleClick}
      onMouseOver={hoverOver}
    >
      {Array.from({ length: 5 }, (v, i) => (
        <Star
          starId={i + 1}
          key={`star_${i + 1}`}
          marked={selection ? selection >= i + 1 : rating >= i + 1}
        />
      ))}
    </div>
  )
}

export default StarRating