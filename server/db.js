const { Pool } = require('pg');

const pool = new Pool({
    user: 'tpl1122_12',
    host: '/tmp',
    database: "hairbutters",
    port: 5432,
});

module.exports = pool;