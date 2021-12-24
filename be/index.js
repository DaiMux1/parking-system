require('dotenv').config()
const cors = require('cors')
const tickets = require('./routes/tickets');
const revenues = require('./routes/revenues');
const users = require('./routes/users');
const auth = require('./routes/auth')
const mongoose = require('mongoose');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/parking', { useNewUrlParser: true , useUnifiedTopology: true, 'useCreateIndex': true})
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(cors())
app.use(express.json());
app.use('/api/tickets', tickets);
app.use('/api/revenues', revenues);
app.use('/api/users', users);
app.use('/api/auth', auth)


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));