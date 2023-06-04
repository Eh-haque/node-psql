import { QueryResult } from 'pg';

// Define an interface representing the structure of the "users" table
export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
}

export interface CustomQueryResult<T> extends QueryResult {
  rows: T[];
}
