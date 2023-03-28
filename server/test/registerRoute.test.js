const request = require("supertest");
const { app, server } = require("../index");
const db = require("../database/db");

describe("POST /register", () => {
  // Clean up the database before each test
  beforeEach(() => db.query("DELETE FROM users"));

  // Stop the server after all tests have finished
  afterAll(() => server.close());

  it("registers a new user and returns status 201", async () => {
    const res = await request(server) // Use server instead of app
      .post("/register")
      .send({
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        password: "password123",
      });
    expect(res.status).toBe(201);
  });

  it("returns an error if the email is already in use", async () => {
    // Insert a user with the same email
    await db.query(
      "INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4)",
      ["Jane", "Doe", "janedoe@example.com", "password123"]
    );

    const res = await request(server) // Use server instead of app
      .post("/register")
      .send({
        firstName: "John",
        lastName: "Doe",
        email: "janedoe@example.com", // Use the same email as the inserted user
        password: "password123",
      });
    expect(res.status).toBe(400);
    expect(res.body.error).toBe("Email already in use");
  });

  it("returns an error if any of the required fields is missing", async () => {
    const res = await request(server) // Use server instead of app
      .post("/register")
      .send({
        firstName: "John",
        lastName: "Doe",
        // Missing email and password
      });
    expect(res.status).toBe(400);
    expect(res.body.error).toBe("Missing required fields");
  });
});
