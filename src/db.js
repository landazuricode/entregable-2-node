// src/db.js
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: 'postgresql://postgres:postgres@localhost:5432/node2',
});

module.exports = pool;
