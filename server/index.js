const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 9000;

// Database setup
const dataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
  console.log(`Created directory: ${dataDir}`);
}
const dbPath = path.join(dataDir, 'hueneu_contacts.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database', err.message);
  } else {
    console.log(`Connected to the SQLite database at ${dbPath}`);
    db.run(`CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )`, (err) => {
      if (err) {
        console.error('Error creating table "contacts"', err.message);
      } else {
        console.log('Table "contacts" is ready.');
      }
    });
  }
});

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the React app's build directory
const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

// API endpoint for contact form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required (name, email, message).' });
  }

  // Basic email validation
  if (!/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address format.' });
  }

  const stmt = db.prepare('INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)');
  stmt.run(name, email, message, function(err) {
    if (err) {
      console.error('Error inserting data into database:', err.message);
      return res.status(500).json({ error: 'Failed to save message. Please try again later.' });
    }
    console.log(`A new row has been inserted with rowid ${this.lastID}`);
    res.status(201).json({ success: true, message: 'Message received! We will get back to you soon.', id: this.lastID });
  });
  stmt.finalize((err) => {
    if(err) console.error('Error finalizing statement:', err.message);
  });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  const indexPath = path.join(buildPath, 'index.html');
  if (fs.existsSync(indexPath)){
    res.sendFile(indexPath);
  } else {
    res.status(404).send('index.html not found in build directory. Did you run `npm run build`?');
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log(`Serving static files from: ${buildPath}`);
  console.log(`API endpoint for contacts available at POST /api/contact`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\nGracefully shutting down from SIGINT (Ctrl-C)');
  db.close((err) => {
    if (err) {
      return console.error('Error closing the database connection:',err.message);
    }
    console.log('Closed the database connection.');
    process.exit(0);
  });
});
