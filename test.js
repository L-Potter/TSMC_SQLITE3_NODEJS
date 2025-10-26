const sqlite3 = require('sqlite3');

const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run("CREATE TABLE test (id INT, name TEXT)");
  db.run("INSERT INTO test VALUES (1, 'Alice')");
  
  db.each("SELECT id, name FROM test", (err, row) => {
    if(err) throw err;
    console.log(row.id, row.name);
  });
});

db.close();
