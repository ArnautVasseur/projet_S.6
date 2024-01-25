const express = require('express');
const sqlite3 = require('sqlite3');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 4000;

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = new sqlite3.Database('./database/Database.db', (err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
  } else {
    console.log('Connected to the database');
  }
});

app.get('/users', (req, res) => {
    db.all('SELECT * FROM Users', (err, rows) => {
        if (err) {
            console.error('Error fetching recipes:', err.message);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(rows); // Return the list of recipes as JSON response
    });
});

app.get('/achievements', (req, res) => {
    db.all('SELECT * FROM Achievements', (err, rows) => {
        if (err) {
            console.error('Error fetching recipes:', err.message);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(rows); // Return the list of recipes as JSON response
    });
});

app.post('/inscription', (req, res) => {
  const { username, password } = req.body;

  // Validate the incoming data (you should add more validation)
  if (!username || !password) {
    return res.status(400).json({ message: 'Invalid data' });
  }

  // Example: Insert user data into the database
  const insertUserQuery = 'INSERT INTO Users (username, password) VALUES (?, ?)';
  db.run(insertUserQuery, [username, password], function (err) {
    if (err) {
      console.error('Error during user registration:', err.message);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });
});

app.post('/connexion', (req, res) => {
  const { username, password } = req.body;

  // Validate the incoming data (you should add more validation)
  if (!username || !password) {
    return res.status(400).json({ message: 'Invalid data' });
  }

  // Check if the user exists and validate the password
  const selectUserQuery = 'SELECT * FROM Users WHERE username = ? AND password = ?';
  db.get(selectUserQuery, [username, password], (err, user) => {
    if (err) {
      console.error('Error during user login:', err.message);
      return res.status(500).json({ message: 'Internal server error' });
    }

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // User authenticated, generate a JWT token
    // const token = jwt.sign({ userId: user.userID, username: user.username }, 'token', { expiresIn: '1h' });

    res.json({ userId : user.userID });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});