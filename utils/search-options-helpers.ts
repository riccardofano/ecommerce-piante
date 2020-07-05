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

export function getAsString(value: string | string[]) {
  return Array.isArray(value) ? value[0] : value;
}
