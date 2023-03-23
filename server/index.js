
// ----------------------------------------
    const express = require("express");
    // const bodyParser = require("body-parser");
    // const cookieParser = require("cookie-parser");

// ----------------------------------------
// ----------------------------------------
//        Importing Middleware from auth folder
// const { corsMiddleware, sessionMiddleware } = require("./auth/authMiddleware");


  /// leaving a note to add the build folder from src that you 
  // will create into the server folder: well done Hussein Bahdon


const app = express();

//----------------------------------------
//      cookie & bodyParser
// app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: true }));
//----------------------------------------

// app.use(express.json());
// app.use(sessionMiddleware);
// app.use(corsMiddleware);
//----------------------------------------

// const loginRoute = require('./login');
// const registerRoute = require('./routes/register')

// registerRoute(app)
// loginRoute(app)

//----------------------------------------
app.listen(4001, () => {
  console.log("running server");
});

