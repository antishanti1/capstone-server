const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const listingsRoute = require('./routes/listings');
const usersRoute = require('./routes/users');

dotenv.config({ path: '.env.local' });

app.use(express.json());

mongoose
.connect(process.env.MONGODB_URI , { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));


app.use('/api/listings', listingsRoute);
app.use('/api/users', usersRoute);

app.listen(5050, () => {
    console.log('Server running on port 5050')
} );