db.query("DELETE FROM users WHERE firstname = $1 AND secondname = $2 AND email = $3 AND password = $4", ["Jane", "Doe", "janedoe@example.com", "newpassword"], (err, result) => {
    if (err) {
      console.error("Error deleting data", err.stack);
    } else {
      console.log("Data deleted successfully");
    }
  });