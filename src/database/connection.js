const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "playlist_db"
});

connection.connect((err) => {
    if (err) {
        console.log("Erro ao conectar com o banco:", err);
        return;
    }

    console.log("Conectado ao banco de dados!");
});

module.exports = connection;