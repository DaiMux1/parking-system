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

router.get('/:license_plate', async (req, res) => {
  const ticket = await Ticket.findOne({ license_plate: req.params.license_plate});

  if (!ticket) return res.status(404).send('The genre with the given ID was not found.');

  res.send(ticket);
});

router.get('/monthlyTicket/:IDs', async (req, res) => {
  const tickets = await Ticket.findOne({ IDs: req.params.IDs })
  if (!tickets) return res.status(400).send('Out of ticket')
  res.send(tickets)
})

router.post('/', async (req, res) => {

  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);


  let ticket = new Ticket(_.pick(req.body, ['license_plate', 'ticket_type', 'vehicle_type']));
    
  ticket = await ticket.save();
  
  res.send(ticket);
});

router.put('/in/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const ticket = await Ticket.findByIdAndUpdate(req.params.id, {
      license_plate: req.body.license_plate, 
      time_in: Date.now() + 7*60*60*1000,
      ticket_type: req.body.ticket_type,
      vehicle_type: req.body.vehicle_type,
      used: true
    }, {new: true});

  if (!ticket) return res.status(404).send('The ticket with the given ID was not found.');
  
  res.send(ticket);
});

router.put('/out/:id', async (req, res) => {

  const ticket = await Ticket.findByIdAndUpdate(req.params.id, {
      used: false, 
      license_plate: '0', 
    }, {new: true});

  if (!ticket) return res.status(404).send('The ticket with the given ID was not found.');

  const day = new Date(Date.now()+ 7*60*60*1000).getDate() - ticket.time_in.getDate()
  console.log(typeof day)
  
  const price = (day+1)*5000 

  const revenue = new Revenue({
    revenue: price
  })
  await revenue.save()

  res.send(ticket);
});

router.put('/monthly_in/:id', async (req, res) => {

  const ticket = await Ticket.findByIdAndUpdate(req.params.id, {
      used: true
    }, {new: true});

  if (!ticket) return res.status(404).send('The ticket with the given ID was not found.');
  
  res.send(ticket);
});

router.put('/monthly_out/:id', async (req, res) => {

  const ticket = await Ticket.findByIdAndUpdate(req.params.id, {
      used: false, 
    }, {new: true});

  if (!ticket) return res.status(404).send('The ticket with the given ID was not found.');
  
  res.send(ticket);
});



router.put('/createMonthlyTicket/:id', async (req, res) => {
  const { error } = validateMonthTicket(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const ticket = await Ticket.findByIdAndUpdate(req.params.id, {
      license_plate: req.body.license_plate, 
      ticket_type: 'thang',
      due_date:  +new Date() + 7*60*60*1000 + 30*60*60*24*1000,
      vehicle_type: req.body.vehicle_type,
      IDs: req.body.IDs
    }, {new: true});

  if (!ticket) return res.status(404).send('The ticket with the given ID was not found.');

  const price = req.body.vehicle_type === 'xe may' ? 150000 : 50000

  const revenue = new Revenue({
    revenue: price
  })

  await revenue.save()
  
  res.send(ticket);
});

router.delete('/:id', async (req, res) => {
  const ticket = await Ticket.findByIdAndRemove(req.params.id);

  if (!ticket) return res.status(404).send('The ticket with the given ID was not found.');

  res.send(ticket);
});



module.exports = router;

