import { openDB } from "./openDB";

export interface Type {
  type: string;
  count: number;
}

export async function getTypes() {
  const db = await openDB();
  const types = await db.all(`
    SELECT type, count(*) as count
    FROM Product
    GROUP BY type
    `);
  return types;
}
