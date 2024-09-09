// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const { mongoUri, PORT } = require("./config.js");

// Initialize Express app
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// My Imported Routes
const departmentRoutes = require('./routes/departmentRoutes');
const staffRoutes = require('./routes/staffRoutes');
const partnersRoutes = require('./routes/partnersRoutes');
const courseRoutes = require('./routes/courseRoutes');
const studentsRoutes = require('./routes/studentsRoutes.js');

//using the routes 
app.use('/api/departments', departmentRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/partners', partnersRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/students', studentsRoutes);
// Listen on port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
