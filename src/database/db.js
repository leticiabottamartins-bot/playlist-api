const { Pool } = require("pg");

const pool = new Pool({
    host: process.env.DB_HOST || "database",
    user: process.env.DB_USER || "usuario",
    password: process.env.DB_PASS || "senha",
    database: process.env.DB_NAME || "playlist_db",
    port: process.env.DB_PORT || 5432
});

module.exports = pool;