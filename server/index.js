// ----------------------------------------
const express = require("express");
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const registerRoute = require('./routes/register')
const session = require("express-session");

// ----------------------------------------
// ---------------------------------------- 
//        Importing Middleware from auth folder

// 

const app = express();

//----------------------------------------
//  cookie & bodyParser

//----------------------------------------
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    key: "userId",
    secret: "cyf",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

app.use(express.json());

app.use(morgan("dev"))
//----------------------------------------

const loginRoute = require('./routes/login');

registerRoute(app)
loginRoute(app)

//----------------------------------------
app.listen(4001, () => {
console.log("running server");
});