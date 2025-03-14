const express = require('express');
const app = express();
const pool = require('./db');
const cors = require('cors');
const port = 3000;


app.use(cors());
app.use(express.json());
//grabs data for events

app.get('/butters', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM butters');
        res.json(result.rows);

    } catch (err) {
        console.error('You have an error: ', err);
    }
})

//allows user to edit events
app.post('/butters', async (req, res) => {
    const {scent, color, quantity} = req.body;
  
    try{
      const createEvent = await pool.query('INSERT INTO butters (scent, color, quantity) VALUES ($1, $2, $3) RETURNING *', [scent, color, quantity]);
      res.json(createButter.rows);

    } catch(err) {
      console.error(err);
      res.status("Unable to create your event due").send(err);
    }
  });


app.listen(port, () => {
    console.log(`Server started on 3000`);
  });