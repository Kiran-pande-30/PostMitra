require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes'); 
const parcelRoutes = require('./routes/parcelRoutes'); 

const app = express();

// Middleware
app.use(express.json());  // For parsing JSON request bodies

// Connect to the database
connectDB();

// Use the authentication routes
app.use('/auth', authRoutes);  // All routes in authRoutes.js will be prefixed with /auth
app.use('/parcel', parcelRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
