import { Request, Response } from 'express';
import UserModel from './model';

const userModel = new UserModel();

async function getUsers(req: Request, res: Response) {
  try {
    const users = await userModel.getAllUsers();
    res.send(users);
  } catch (error) {
    console.error('Error getting users:', error);
  } finally {
    // Close the database connection when done
    // pool.end();
  }
}

async function createUser(req: Request, res: Response) {
  const userData = {
    name: 'John Doe',
    email: 'john@example.com',
    password: 'mypassword',
  };

  try {
    const user = await userModel.createUser(userData);
    res.send(user);
  } catch (error) {
    console.error('Error getting users:', error);
  } finally {
    // Close the database connection when done
    // pool.end();
  }
}

export default { getUsers, createUser };
