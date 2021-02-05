// Iteration #1
const mongoose = require('mongoose')
require('../configs/db.config.js')

// retrieving the dronemodel
let DroneModel = require('../models/Drone.model.js')

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];
// putting drones inside the model.
DroneModel.create(drones)
  .then((result) => {
    console.log('Drones are created', result)
    mongoose.connection.close()
  })
  .catch(() => {
    console.log('error with creating drones')
  })
