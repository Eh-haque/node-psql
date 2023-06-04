/* eslint-disable prettier/prettier */
import pool from '../../config/db';
import { User } from './interface';

// Define a class for the 'users' table model
class UserModel {
  async getAllUsers(): Promise<User[]> {
    const query = 'SELECT * FROM users';
    const result = await pool.many<User>(query);
    return result;
  }

  async createUser(user: User): Promise<User> {
    // SQL statement to create a table
    //     const query = `
    // CREATE TABLE IF NOT EXISTS users (
    //   id SERIAL PRIMARY KEY,
    //   name VARCHAR(255) NOT NULL,
    //   email VARCHAR(255) NOT NULL,
    //   password VARCHAR(255) NOT NULL
    // );
    // `;

    const values = [user.name, user.email, user.password];

    // 'INSERT INTO users (name, email, password) values ($1, $2, $3) returning *',

    const result = await pool.query(
      'INSERT INTO users (name, email, password) values ($1, $2, $3) returning *',
      values,
    );
    return result;
  }

  // Other methods for CRUD operations can be added here
}

export default UserModel;
