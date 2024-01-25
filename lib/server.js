const express = require('express');
const sqlite3 = require('sqlite3');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = new sqlite3.Database('./database/MontresDB.db', (err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
  } else {
    console.log('Connected to the database');
  }
});

app.get('/users', (req, res) => {
    db.all('SELECT * FROM User', (err, rows) => {
        if (err) {
            console.error('Error fetching recipes:', err.message);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(rows); // Return the list of recipes as JSON response
    });
});

app.post('/inscription', (req, res) => {
  const { email, password } = req.body;

  // Validate the incoming data (you should add more validation)
  if (!email || !password) {
    return res.status(400).json({ message: 'Invalid data' });
  }

  // Example: Insert user data into the database
  const insertUserQuery = 'INSERT INTO User (email, password) VALUES (?, ?)';
  db.run(insertUserQuery, [email, password], function (err) {
    if (err) {
      console.error('Error during user registration:', err.message);
      return res.status(500).json({ message: 'Internal server error' });
    }

    const userId = this.lastID;

    // Example: Update panierID for the user
    const updatePanierQuery = 'UPDATE User SET panierID = ? WHERE userID = ?';
    db.run(updatePanierQuery, [userId, userId], function (err) {
      if (err) {
        console.error('Error updating panierID for user:', err.message);
        return res.status(500).json({ message: 'Internal server error' });
      }

      console.log(`User registered successfully with ID: ${userId}`);
      res.json({ message: 'User registered successfully' });
    });
  });
});

app.post('/connexion', (req, res) => {
  const { email, password } = req.body;

  // Validate the incoming data (you should add more validation)
  if (!email || !password) {
    return res.status(400).json({ message: 'Invalid data' });
  }

  // Check if the user exists and validate the password
  const selectUserQuery = 'SELECT * FROM User WHERE email = ? AND password = ?';
  db.get(selectUserQuery, [email, password], (err, user) => {
    if (err) {
      console.error('Error during user login:', err.message);
      return res.status(500).json({ message: 'Internal server error' });
    }

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // User authenticated, generate a JWT token
    // const token = jwt.sign({ userId: user.userID, email: user.email }, 'token', { expiresIn: '1h' });

    res.json({ userId : user.userID });
  });
});

// Middleware pour vérifier le token sur les requêtes protégées
function verifierToken(req, res, next) {
  const token = req.header('Authorization');
  console.log(token);

  if (!token) {
    return res.status(401).json({ error: 'Accès non autorisé' });
  }

  jwt.verify(token, 'token', (err, decoded) => {
    if (err) {
      console.error('Erreur lors de la vérification du token:', err);
      return res.status(401).json({ error: 'Token non valide' });
    }

    const { userID } = decoded;

    if (!userID) {
      return res.status(401).json({ error: 'Token ne contient pas l\'UserID' });
    }

    console.log('Token valide pour l\'UserID:', userID);

    req.userID = decoded.userID;
    next();
  });
}

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});