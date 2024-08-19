import { createPool } from "mysql2/promise";

export const pool = createPool({
  user: "root",
  password: "Kasio135+",
  host: "localhost",
  port: 3306,
  database: "sendbook",
});
