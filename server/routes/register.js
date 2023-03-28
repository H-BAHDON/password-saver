const db = require("../database/db"); 

const bcrypt = require("bcrypt");

const saltRounds = 10;

function registerRoute(app) {
  app.post("/register", (req, res) => {
    const firstName = req.body.firstName;
    const secondName = req.body.secondName;
    const email = req.body.email;
    const password = req.body.password;

    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }

      db.query(
        "INSERT INTO users (firstName, secondName, email, password) VALUES ($1, $2, $3, $4)",
        [firstName, secondName, email, hash],
        (err, result) => {
          if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
          }
          res.sendStatus(200);
        }
      );
    });
  });
}

module.exports = registerRoute;