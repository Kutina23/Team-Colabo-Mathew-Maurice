const express = require('express');
const connectDB = require('./db');

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});