const { Revenue, validate } = require('../models/revenue')
const mongoose = require('mongoose');
const _ = require('lodash')
const express = require('express');
const router = express.Router();

// tinh doanh thu nhập vào ngày tháng
router.get('/', async (req, res) => {
  if (!req.query.day && !req.query.month) {
    return res.status(400).send('No day, month')
  }

  month = req.query.month ? req.query.month - 1 : (new Date().getMonth())
  month = parseInt(month)


  let revenues = []

  if (req.query.day && req.query.year) {
    let day = parseInt(req.query.day)
    let year = parseInt(req.query.year)
    revenues = await Revenue.find({
      time: {
        $gte: new Date(year, month, day, 7),
        $lt: new Date(year, month, day + 1, 7),
      }
    });
  } else if (req.query.day) {
    let day = parseInt(req.query.day)
    revenues = await Revenue.find({
      time: {
        $gte: new Date(new Date().getFullYear(), month, day, 7),
        $lt: new Date(new Date().getFullYear(), month, day + 1, 7),
      }
    });
  }
  else {
    revenues = await Revenue.find({
      time: {
        $gte: new Date(new Date().getFullYear(), month, 1, 7),
        $lt: new Date(new Date().getFullYear(), month, 30, 7),
      }
    });
  }
  let revenue = 0
  for (const i in revenues) {
    revenue = revenue + revenues[i].revenue
  }

  res.json({ revenue: revenue });
});

// thống kê số lượng vé tháng vé ngày
router.get('/statistic', async (req, res) => {
  if (!req.query.day && !req.query.month) {
    return res.status(400).send('No day, month')
  }

  month = req.query.month ? req.query.month - 1 : (new Date().getMonth())
  month = parseInt(month)

  if (req.query.day && req.query.year) {
    let day = parseInt(req.query.day)
    let year = parseInt(req.query.year)
    revenues = await Revenue.find({
      time: {
        $gte: new Date(year, month, day, 7),
        $lt: new Date(year, month, day + 1, 7),
      }
    });
  } else if (req.query.day) {
    let day = parseInt(req.query.day)
    revenues = await Revenue.find({
      time: {
        $gte: new Date(new Date().getFullYear(), month, day, 7),
        $lt: new Date(new Date().getFullYear(), month, day + 1, 7),
      }
    });
  }
  else {
    revenues = await Revenue.find({
      time: {
        $gte: new Date(new Date().getFullYear(), month, 1, 7),
        $lt: new Date(new Date().getFullYear(), month, 30, 7),
      }
    });
  }

  let day_ticket = 0
  let month_ticket = 0
  for (const i in revenues) {
    if (revenues[i].ticket_type == "ngay") day_ticket += 1
    else month_ticket += 1
  }

  res.json({ ve_ngay: day_ticket, ve_thang: month_ticket })
})


// tạo doanh thu, chưa dùng
router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let revenue = new Revenue({
    time: Date.now() + 7 * 60 * 60 * 1000,
    revenue: req.body.revenue
  });

  await revenue.save()
  res.send(revenue)
})


module.exports = router
