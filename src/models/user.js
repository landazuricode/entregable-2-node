const pool = require('../db');

const getAllUsers = async () => {
    const query = 'SELECT * FROM users';
    const { rows } = await pool.query(query);
    return rows;
};

const createUser = async ({ first_name, last_name, email, password, birthday }) => {
    const query = 'INSERT INTO users (first_name, last_name, email, password, birthday) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const { rows } = await pool.query(query, [first_name, last_name, email, password, birthday]);
    return rows[0];
};

const getUserById = async (id) => {
    const query = 'SELECT * FROM users WHERE id = $1';
    const { rows } = await pool.query(query, [id]);
    return rows[0];
};

const deleteUser = async (id) => {
    const query = 'DELETE FROM users WHERE id = $1';
    await pool.query(query, [id]);
};

const updateUser = async (id, { first_name, last_name, email, password, birthday }) => {
    const query = 'UPDATE users SET first_name = $1, last_name = $2, email = $3, password = $4, birthday = $5 WHERE id = $6 RETURNING *';
    const { rows } = await pool.query(query, [first_name, last_name, email, password, birthday, id]);
    return rows[0];
};

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    deleteUser,
    updateUser
};
