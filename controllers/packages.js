import Package from '../models/package.js'

//! SEASON Filter
export const getAllPackages = async (req, res) => {
  try {
    const season = req.query.season
    console.log('SEASON >>>', season)
    if (season === 'All' || !season) {
      const packages = await Package.find()
      if (!packages) throw new Error()
      return res.status(200).json(packages)
    } else {
      const packagesLibrary = await Package.find()
      const seasonalPackages = packagesLibrary.filter(item => {
        return item.season === season
      })
      return res.status(200).json(seasonalPackages)
    }
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: err.message })
  }
}

//! INDIVIDUAL Place Route
export const getOnePackage = async (req, res) => {
  try {
    const { id } = req.params
    const onePackage = await Package.findById(id)
    console.log('THE PACKAGE WE WANT >>>', onePackage)
    if (!onePackage) throw new Error()
    return res.status(200).json(onePackage)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'Not Found' })
  }
}
