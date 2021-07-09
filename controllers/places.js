import Place from '../models/place.js'
import User from '../models/user.js'

//! INDEX Route
export const getAllPlaces = async (_req, res) => {
  try {
    const placesLibrary = await Place.find()
    return res.status(200).json(placesLibrary)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: err.message })
  }
}
// //! SAVED PLACES Route
export const getAllMyPlaces = async (req, res) => {
  try {
    const user = await User.findById(req.currentUser._id)
    const placesLibrary = await Place.find()
    const userPlaces = placesLibrary.filter(item => {
      return user.savedPlaces.includes(item._id)
    })
    return res.status(200).json(userPlaces)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: err.message })
  }
}

//! INDIVIDUAL Place Route
export const getOnePlace = async (req, res) => {
  try {
    const { id } = req.params
    const onePlace = await Place.findById(id)
    console.log('THE PLACE WE WANT >>>', onePlace)
    if (!onePlace) throw new Error()
    return res.status(200).json(onePlace)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'Not Found' })
  }
}
// * Add rating to a place
export const addRatingToPlace = async (req, res) => {
  try {
    const { id } = req.params 
    const myPlace = await Place.findById(id)
    if (!myPlace) throw new Error('Cannot find package')
    const newRating = { ...req.body, owner: req.currentUser._id }
    myPlace.ratings.push(newRating)
    await myPlace.save()
    return res.status(200).json(myPlace)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: err.message })
  }
}
