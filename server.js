const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/UserDB')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

// Define user schema and model
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }, // Hashed password
});

const User = mongoose.model('User', userSchema);

// Login endpoint
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log(`Login attempt: ${username}`);

  try {
    // Find the user by username
    const user = await User.findOne({ username });
    console.log('User found:', user);

    if (user) {
      // Compare the password with the hashed password in the database
      //const isMatch = );
     
      console.log('Password match:');
      if (password===user.password) {
        return res.status(200).json({ success: true, message: 'Login successful' });
      } else {
        return res.status(400).json({ success: false, message: 'Invalid credentials' });
      }
    } else {
      return res.status(400).json({ success: false, message: 'User not found' });
    }
  } catch (err) {
    console.error('Error during login:', err);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
