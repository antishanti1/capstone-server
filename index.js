const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const listingsRoute = require('./routes/listings');
const usersRoute = require('./routes/users');
const port = process.env.PORT || 5050;

dotenv.config({ path: '.env.local' });

app.use(cors());
app.use(express.json());

mongoose
.connect(process.env.MONGODB_URI , { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));


app.use('/api/listings', listingsRoute);
app.use('/api/users', usersRoute);



app.listen(port, () => {
    console.log('Server running on port ${port}')
} );