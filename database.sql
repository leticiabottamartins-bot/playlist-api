CREATE TABLE usuario (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    senha VARCHAR(150) NOT NULL
);

CREATE TABLE playlist (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(255),
    id_usuario INT NOT NULL,

    FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);

CREATE TABLE musica (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    artista VARCHAR(100) NOT NULL,
    album VARCHAR(100),
    duracao INT
);

CREATE TABLE playlist_musica (
    id_playlist INT,
    id_musica INT,

    PRIMARY KEY (id_playlist, id_musica),

    FOREIGN KEY (id_playlist) REFERENCES playlist(id),
    FOREIGN KEY (id_musica) REFERENCES musica(id)
);