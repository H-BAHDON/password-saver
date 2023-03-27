db.query("INSERT INTO users (firstname, secondname, email, password) VALUES ($1, $2, $3, $4)", ["John", "Doe", "johndoe@example.com", "password123"], (err, result) => {
    if (err) {
      console.error("Error inserting data", err.stack);
    } else {
      console.log("Data inserted successfully");
    }
  });