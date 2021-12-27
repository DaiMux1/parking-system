const express = require('express');
const { Timekeeping } = require('../models/timekeeping');
const { User } = require('../models/user');
const router = express.Router()

router.get('/', async (req, res) => {
  // nếu query theo tên, 
  if (req.query.name) {
    const timekeepings = await Timekeeping
      .find()
      .populate({
        path: 'user_id',
        match: {
          name: new RegExp(`.*${req.query.name}.*`, 'i')
        },
        select: 'name coefficients_salary -_id'
      })
    // nếu có tháng thì lấy tháng, nếu ko thì lấy tháng hiện tại
    let month = req.query.month ? parseInt(req.query.month) - 1 : parseInt(new Date().getMonth())
    let year = req.query.year ? parseInt(req.query.year) : new Date().getFullYear()
    console.log(timekeepings)
    let time = 0
    let coefficients_salary = 0
    for (let i in timekeepings) {
      // xét xem có đúng tên hay không
      if (timekeepings[i].user_id) {
        coefficients_salary = timekeepings[i].user_id.coefficients_salary
        if (new Date(year, month, 1, 7) <= timekeepings[i].start_time &&
          new Date(year, month, 30, 7) > timekeepings[i].start_time)
          time += timekeepings[i].end_time - timekeepings[i].start_time
      }
    }

    time = time / 1000 / 60 / 60
    let salary = time * coefficients_salary

    res.json({ salary: salary, time: time, month: month + 1 })
  }

  const users = await User.find();
  // console.log(users)


  const timekeepings = await Timekeeping
    .find()
    .populate({
      path: 'user_id',
    })
  let result = []
  for (const key in users) {
    if (!users[key].isAdmin) {
      let user = users[key]
      result.push({ name: user.name, time: 0, salary: 0, coefficients_salary: user.coefficients_salary, month: parseInt(new Date().getMonth()) + 1, year: new Date().getFullYear() })
      for (const ind_tk in timekeepings) {
        if (String(timekeepings[ind_tk].user_id._id) == String(user._id)) {
          if (new Date(result[result.length - 1].year, result[result.length - 1].month-1, 1, 7) <= timekeepings[ind_tk].start_time &&
          new Date(result[result.length - 1].year, result[result.length - 1].month-1, 30, 7) > timekeepings[ind_tk].start_time)
            result[result.length - 1].time += timekeepings[ind_tk].end_time - timekeepings[ind_tk].start_time
        }
      }
      result[result.length - 1].time = (result[result.length - 1].time / 1000 / 60 / 60).toFixed(2)
      result[result.length - 1].salary = (result[result.length - 1].time * user.coefficients_salary).toFixed(2)
    }
  }


  res.send(result)

  // res.send(timekeepings)
})

module.exports = router