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
          
          // set user data in session after successful registration
          req.session.user = {
            email: email,
            firstName: firstName,
            lastName: secondName
          };
          
          res.sendStatus(200);
        }
      );
    });
  });
  
  // check session to see if user is logged in
  app.get("/register", (req, res) => {
    if (req.session.user) {
      res.send({ loggedIn: true, user: req.session.user });
    } else {
      res.send({ loggedIn: false });
    }
  });
}

module.exports = registerRoute;
