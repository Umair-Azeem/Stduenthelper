const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const studentRouter = require('./routes/Studentroutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

app.use(cors())

// Use the student router for routes starting with /students
app.use('/students', studentRouter);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/studentalgo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
  
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
