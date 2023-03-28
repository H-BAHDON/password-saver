const { Pool } = require("pg");

const db = new Pool({
  user: "fessvndx",
  host: "surus.db.elephantsql.com",
  database: "fessvndx",
  password: "nb3-MIo5Nh9pfE3n1j9GlSgvecUtrG2v",
  port: 5432,
});

db.on("connect", () => {
  console.log("Connected to database");
});

module.exports = db;