const pool = require('../db');

class User {
    static async getAllUsers() {
        const { rows } = await pool.query('SELECT * FROM users');
        return rows;
    }

    static async createUser({ first_name, last_name, email, password, birthday }) {
        const { rows } = await pool.query('INSERT INTO users (first_name, last_name, email, password, birthday) VALUES ($1, $2, $3, $4, $5) RETURNING *', [first_name, last_name, email, password, birthday]);
        return rows[0];
    }

    static async getUserById(id) {
        const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        return rows[0];
    }

    static async deleteUser(id) {
        await pool.query('DELETE FROM users WHERE id = $1', [id]);
    }

    static async updateUser(id, { first_name, last_name, email, password, birthday }) {
        const { rows } = await pool.query('UPDATE users SET first_name = $1, last_name = $2, email = $3, password = $4, birthday = $5 WHERE id = $6 RETURNING *', [first_name, last_name, email, password, birthday, id]);
        return rows[0];
    }
}

module.exports = User;
