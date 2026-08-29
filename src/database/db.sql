CREATE DATABASE playlist_db;
USE playlist_db;

CREATE TABLE usuario(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    senha VARCHAR(150) NOT NULL
);

CREATE TABLE playlist(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(250),
    id_usuario INT NOT NULL,

    FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);

CREATE TABLE musica(
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    artista VARCHAR(150) NOT NULL,
    album VARCHAR(100),
    duracao INT
);

CREATE TABLE playlist_musica(
    id_playlist INT,
    id_musica INT,

    FOREIGN KEY (id_playlist) REFERENCES playlist(id),
    FOREIGN KEY (id_musica) REFERENCES musica(id)
);