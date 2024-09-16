import pg from "pg";
import {
  PG_DATABASE,
  PG_HOST,
  PG_PASSWORD,
  PG_PORT,
  PG_USER,
} from "./config.js";

export const pool = new pg.Pool({
  port: PG_PORT,
  host: PG_HOST,
  user: PG_USER,
  password: PG_PASSWORD,
  database: PG_DATABASE,
});

pool.on("connect", () => {
  console.log("Database connected");
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error connecting to the database:", err.stack);
  }
  console.log("Manual connection test: Database connected");
  release();
});
