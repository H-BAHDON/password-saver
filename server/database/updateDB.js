db.query("UPDATE users SET firstname = $1, secondname = $2, email = $3, password = $4 WHERE firstname = $5 AND secondname = $6 AND email = $7 AND password = $8", ["Jane", "Doe", "janedoe@example.com", "newpassword", "John", "Doe", "johndoe@example.com", "password123"], (err, result) => {
    if (err) {
      console.error("Error updating data", err.stack);
    } else {
      console.log("Data updated successfully");
    }
  });