const express = require('express');
const app = express();
const pool = require('./db');
const cors = require('cors');
const port = 3000;


app.use(cors());
app.use(express.json());

//grabs and display butters
app.get('/butters', async (req, res) => {
    try {
        let { scents } = req.query;
        let result;
        //search functionality
        if (scents) {
            result = await pool.query('SELECT * FROM butters WHERE scents ILIKE $1', [`${scents}`]);
        } else {
            result = await pool.query('SELECT * FROM butters');
        }
        res.json(result.rows);

} catch (err) {
    console.error('You have an error: ', err);
}
})

//allows user to add butter
app.post('/butters', async (req, res) => {
    const { scents, color, quantity } = req.body;

    try {
        const createButter = await pool.query('INSERT INTO butters (scents, color, quantity) VALUES ($1, $2, $3) RETURNING *', [scents, color, quantity]);
        res.json(createButter.rows);

    } catch (err) {
        console.error(err);
        res.status("Unable to place your butter order").send(err);
    }
});

//let user delete butters
app.delete('/butters', async (req, res) => {
    const scents = req.body.scents

    try {
        const deleteButter = await pool.query('DELETE FROM butters WHERE scents = $1', [scents]);
        res.json(deleteButter.rows);
    } catch (err) {
        console.error(err);
        res.status("Unable to place your butter order").send(err);
    }
  });

app.listen(port, () => {
    console.log(`Server started on 3000`);
});