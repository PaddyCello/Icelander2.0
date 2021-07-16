import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js'
import placeData from './data/places.js'
import Place from '../models/place.js'
import User from '../models/user.js'
import userData from './data/users.js'
import packageData from './data/packages.js'
import Package from '../models/package.js'

const seedDatabase = async () => {
  try {
    //! Connect to database 
    await mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    console.log('🚀 Database has connected successfully')

    //! Clear database
    await mongoose.connection.db.dropDatabase()
    console.log('👍 DB dropped')

    //! Add users
    const users = await User.create(userData)
    console.log(`🌱 DB seeded with ${users.length} users`)

    //! Add places to db
    const places = await Place.create(placeData)
    console.log(`🌱 DB seeded with ${places.length} places`)

    //! Add packages to db
    const packages = await Package.create(packageData)
    console.log(`🌱 DB seeded with ${packages.length} packages`)

    //! Close connection
    await mongoose.connection.close()
    console.log('👋 Bye!')

  } catch (err) {
    console.log(err)
    await mongoose.connection.close()
    console.log('👋 Bye!')
  }
}
seedDatabase()