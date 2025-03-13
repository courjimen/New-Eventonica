const express = require('express');
const app = express();
const pool = require('./db');
const cors = require('cors');
const port = 3000;

app.use(cors());
app.use(express.json());
//grabs data for events

app.get('/events', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM events');
        res.json(result.rows);

    } catch (err) {
        console.error('You have an error: ', err);
    }
})

//allows user to edit events
app.post('/events', async (req, res) => {
    const {location, date, time} = req.body;
  
    try{
      const createEvent = await pool.query('INSERT INTO events (location, date, time) VALUES ($1, $2, $3) RETURNING *', [location, date, time]);
      res.json(createEvent.rows);

    } catch(err) {
      console.error(err);
      res.status("Unable to create your event due").send(err);
    }
  });


app.listen(port, () => {
    console.log(`Server started on 3000`);
  });