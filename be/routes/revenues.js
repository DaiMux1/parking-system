const { Revenue, validate } = require('../models/revenue')
const mongoose = require('mongoose');
const _ = require('lodash')
const express = require('express');
const router = express.Router();
//
router.get('/', async (req, res) => {
  const revenues = await Revenue.find().sort('time');
  res.send(revenues);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let revenue = new Revenue({
    time: Date.now() + 7*60*60*1000,
    revenue: req.body.revenue
  });

  await revenue.save()
  res.send(revenue)
})


module.exports = router
