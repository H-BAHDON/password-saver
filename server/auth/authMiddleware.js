
const session = require("express-session");
const cors = require("cors");


const sessionMiddleware = session({
  key: "userId",
  secret: "CYF",
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 60 * 60 * 24,
  },
});

const corsMiddleware = cors({
    origin: ["http://localhost:4001"],
    methods: ["GET", "POST"],
    credentials: true,
  })

  module.exports = { sessionMiddleware, corsMiddleware };