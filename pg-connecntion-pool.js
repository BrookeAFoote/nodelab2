var pg = require("pg");
var pool = new pg.Pool({
user: "postgres",
password: "el2c5U",
host: "localhost",
port: 5432,
database: "todoDB",
ssl: false
});

module.exports = pool;