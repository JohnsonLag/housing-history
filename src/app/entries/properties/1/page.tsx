import sqlite from 'node:sqlite';

const db = new sqlite.DatabaseSync(process.env.SQLITE_DATABASE_FULL_PATH);

let response: any = db.prepare(`SELECT * FROM all_properties;`).all();

console.log(response);

db.close();

// Property = {response}

export default function Page() {
console.log(response);
  return (
	<div>
		{response[0].column_name}
	</div>
  );
}