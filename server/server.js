const express = require('express');
const app = express();
const pool = require('./db');
const cors = require('cors');
const port = 3000;

app.use(cors());
//grabs data for events

app.get('/events', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM events');
        res.json(result.rows);
    } catch (err) {
        console.error('You have an error: ', err);
    }
})

const location = 


app.listen(port, () => {
    console.log(`Server started on 3000`);
  });