import { open } from "sqlite";
import sqlite3 from "sqlite3";

export async function openDB() {
  const db = await open({
    filename: "./products.sqlite",
    driver: sqlite3.Database,
  });
  await db.migrate();
  return db;
}
