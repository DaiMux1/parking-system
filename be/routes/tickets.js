const { Ticket, validate, validateMonthTicket } = require('../models/ticket')
const { Revenue } = require('../models/revenue')
const mongoose = require('mongoose');
const _ = require('lodash')
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const tickets = await Ticket.find().sort('time_in');
  res.send(tickets);
});

router.get('/unused', async (req, res) => {
  const tickets = await Ticket.findOne({ used: false, ticket_type: 'ngay'})
  if (!tickets) return res.status(400).send('Out of ticket')
  res.send(tickets)
})





module.exports = router;

