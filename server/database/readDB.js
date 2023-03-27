
db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      console.error("Error reading data", err.stack);
    } else {
      console.log(result.rows);
    }
  });