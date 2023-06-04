import { Pool, QueryResult } from 'pg';
import pgPromise from 'pg-promise';

const pgp = pgPromise();

// Create a new pool instance with connection details
const pool = {
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'msi123',
  database: 'postgres',
};
export default pgp(pool);
