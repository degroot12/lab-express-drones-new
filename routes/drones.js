const express = require('express');

// require the Drone model here
const DroneModel = require('../models/Drone.model.js')
const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  DroneModel.find()
    .then((drones) => {
      res.render('drones/list.hbs', {drones})
    })
    .catch(() => {
      console.log('there is an error finding the drones')
    })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const {myDrone, myPropellers, myMaxspeed} = req.body
  let myNewDrones = {
    name: myDrone,
    propellers: myPropellers,
    maxSpeed: myMaxspeed,
  }
  DroneModel.create(myNewDrones)
    .then(() => {
      res.redirect('/drones')
    })
    .catch(() => {
      console.log('error while creating new drone')
      res.render('/drones/create')
    })

});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  let id = req.params.id
  DroneModel.findById(id)
    .then((drone) => {
      res.render('drones/update-form.hbs', {drone})
    })
    .catch(() => {
      console.log('error while finding drone')
    })
  
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  let id = req.params.id
  const{myDrone, myPropellers, myMaxspeed} = req.body
  
  let updatedDrone = {
    name: myDrone,
    propellers: myPropellers,
    maxSpeed: myMaxspeed
  }

  DroneModel.findByIdAndUpdate(id, updatedDrone)
    .then(() => {
      res.redirect('/drones')
      console.log('updated succedfull')
    })
    .catch(() => {
      console.log('error while editing the drone')
      res.render('drones/:id/edit')
    })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
