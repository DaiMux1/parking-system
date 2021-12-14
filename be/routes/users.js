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