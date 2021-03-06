import { Pool } from 'pg';

const connectionString = process.env.NODE_ENV === 'test' ? process.env.TEST_DATABASE : process.env.DATABASE_URL;

const pool = new Pool({
  connectionString,
});

export default {
  query: (text, params) => pool.query(text, params),
};
