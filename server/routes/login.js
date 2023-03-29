const bcrypt = require("bcrypt");
const db = require("../database/db");
const {sessionMiddleware} = require("../auth/authMiddleware")


function loginRoute(app) {

  app.use(sessionMiddleware); // use session middleware here

  app.post("/login", (req, res) => {
    const { email, password } = req.body;

    db.query(
      "SELECT * FROM users WHERE email = $1",
      [email],
      (err, result) => {
        if (err) {
          return res.status(500).json({ error: "Internal server error" });
        }
        console.log('Result:', result);

        if (result?.rowCount > 0) { // check the rowCount property of the result object
          bcrypt.compare(password, result.rows[0].password, function(err, passwordMatch) {
            if (err) {
              console.log(err);
              res.sendStatus(500);
              return;
            }
            if (passwordMatch) { // use the passwordMatch variable instead of result to avoid confusion
              req.session.user = result;
              console.log()
              res.status(200).json({
                email: result.rows[0].email,
                firstName: result.rows[0].firstname,
                lastName: result.rows[0].lastname 
              })
            } else {
              res.sendStatus(401);
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