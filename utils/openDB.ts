import { open } from "sqlite";
import sqlite3 from "sqlite3";

export async function openDB() {
  return open({
    filename: "./products.sqlite",
    driver: sqlite3.Database,
  });
}
