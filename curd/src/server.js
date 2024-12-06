const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'crud_app',
});

db.connect((err) => {
    if (err) {
        console.log('Error connecting to database:', err);
    } else {
        console.log('Connected to MySQL database.');
    }
});

app.post('/users', (req, res) => {
    const { name, email, age } = req.body;
    const sql = 'INSERT INTO users (name, email, age) VALUES (?, ?, ?)';
    db.query(sql, [name, email, age], (err, result) => {
        if (err) throw err;
        res.send({ id: result.insertId, name, email, age });
    });
});

app.get('/users', (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;
    const sql = 'UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?';
    db.query(sql, [name, email, age, id], (err) => {
        if (err) throw err;
        res.send('User updated successfully.');
    });
});

app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM users WHERE id = ?';
    db.query(sql, [id], (err) => {
        if (err) throw err;
        res.send('User deleted successfully.');
    });
});

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
