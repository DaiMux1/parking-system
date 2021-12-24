const { User, validate } = require('../models/user');
const _ = require('lodash');
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();



router.get('/', [auth, admin], async (req, res) => {
  const users = await User.find({ isAdmin: false }).select('-password -isAdmin')
  res.send(users)
})

// có thể gửi thông tin từ 4 trường, gửi cái nào cập nhật cái đó
router.put('/:id', async (req, res) => {
  const user = await User.findById(req.params.id)
  if(!user) return res.status(400).send('The user with the given ID was not found.')
  
  
  user.phone_number = req.body.phone_number ? req.body.phone_number : user.phone_number;
  user.username = req.body.username ? req.body.username : user.username;
  user.name = req.body.name ? req.body.name : user.name;
  user.address = req.body.address ? req.body.address : user.address;
  user.coefficients_salary = req.body.coefficients_salary ? req.body.coefficients_salary : user.coefficients_salary;


  if (req.body.password) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.password, salt);
  }

  await user.save()

  res.send(_.pick(user, ['name', 'username', 'phone_number', 'address']))
})

// 
router.delete('/:id', async (req, res) => {
  const user = await User.findById(req.params.id)
  if(!user) return res.status(400).send('The user with the given ID was not found.')

  await user.remove()

  res.send(user)
})

router.post('/create', [auth, admin],  async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message)

  let user = await User.findOne({username: req.body.username })
  if (user) return res.status(400).send("username already exists")

  user = new User(_.pick(req.body, ['name', 'username', 'password', 'phone_number', 'address']))

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();
  const token = user.generateAuthToken();

  res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'username']))
})

router.put('/logout', auth, async (req, res) => {
  let user = await User.findById(req.user._id)
  user.isActive = false
  await user.save()
  res.send(user)
})


module.exports = router