const request = require("supertest");
const express = require("express");
const session = require("express-session");
const registerRoute = require("../routes/register");

const app = express();
app.use(express.json());
app.use(session({ secret: "test", resave: false, saveUninitialized: true }));
registerRoute(app);

describe("registerRoute", () => { //this function creates a test case which is named {registerRoute}
  it("checks if a user is logged in", async () => {  
    //creating a single test: first argument: a descript of what the test is checking
    // second argument is a function that contians the test cdoe
    const res = await request(app).get("/register");

    // checking if a user can successfully register and then logs in

    expect(res.statusCode).toEqual(200); // we expect that status is equal to 200
    expect(res.body).toEqual({ loggedIn: false }); // we expect if the user is logout

    const agent = request.agent(app); //creating an agent to act as a user session

    //

    await agent
      .post("/register") //test then makes a POST request to the "/register" endpoint to register a user. 
      .send({ firstName: "John", secondName: "Doe", email: "johndoe@example.com", password: "password" }) 
      //request includes a JSON payload containing the agent's first name, last name, email, and password.
      .set("Accept", "application/json");
      //set method sets the "Accept" header to "application/json". -- accepting JSON responses from the server.

    const res2 = await agent.get("/register"); // sending a get request to the /register endpoint to check if the user is login

    expect(res2.statusCode).toEqual(200); //so first expect is the status code, if the agent is login it will throw back a 200 which is a pass
    // expect(res2.body).toEqual({ loggedIn: true, user: { email: "johndoe@example.com", firstName: "John", lastName: "Doe" } });
    //the response body contains a loggedIn field set to true, so if the user is login && respone body contain a user field with the users details
  });
});
