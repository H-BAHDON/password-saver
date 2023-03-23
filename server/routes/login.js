const bcrypt = require("bcrypt");
const db = require("../db");

function loginRoute(app) {
  app.post("/login", (req, res) => {
    const { email, password } = req.body;

    db.query(
      "SELECT * FROM users WHERE email = ?;",
      email,
      (err, result) => {
        if (err) {
          res.send({ err: err });
        }

        if (result.length > 0) {
          bcrypt.compare(password, result[0].password, (error, response) => {
            if (response) {
              req.session.user = result;
              console.log(req.session.user);
              res.send(result);
            } else {
              res.send({ message: "Wrong email/password combination!" });
            }
          });
        } else {
          return res.status(401).json({ error: "User doesn't exist" });
        }
      }
    );
  });

  app.get("/login", (req, res) => {
    if (req.session.user) {
      res.send({ loggedIn: true, user: req.session.user });
    } else {
      res.send({ loggedIn: false });
    }
  });
}

module.exports = loginRoute;