const express = require("express");
const router = express.Router();
const db = require("../database/db");

// GET playlists
router.get("/", async (req, res) => {
    try {
        const r = await db.query("SELECT * FROM playlist");

        if (!r.rowCount) {
            throw new Error("Erro: Playlists não encontradas :/");
        }

        return res.status(200).json(r.rows);

    } catch (error) {
        return res.status(404).json(error.message);
    }
});

// GET playlist por ID
router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;

        if (!id) {
            throw new Error("Erro: id inválido :/");
        }

        const r = await db.query(
            "SELECT * FROM playlist WHERE id = $1",
            [id]
        );

        if (!r.rowCount) {
            throw new Error("Erro: Playlist não encontrada :/");
        }

        return res.status(200).json(r.rows[0]);

    } catch (error) {
        return res.status(404).json(error.message);
    }
});

// EDITAR playlist
router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const { nome, descricao } = req.body;

        if (!id) {
            throw new Error("Erro: id inválido :/");
        }

        if (!nome || !descricao) {
            throw new Error("Erro: nome ou descrição inválidos :/");
        }

        const r = await db.query(
            "UPDATE playlist SET nome = $1, descricao = $2 WHERE id = $3 RETURNING *",
            [nome, descricao, id]
        );

        if (!r.rowCount) {
            throw new Error("Erro: Playlist não encontrada :/");
        }

        return res.status(200).json(r.rows[0]);

    } catch (error) {
        return res.status(404).json(error.message);
    }
});

// POST playlist
router.post("/", async (req, res) => {
    try {
        const { nome, descricao, id_usuario } = req.body;

        if (!nome || !descricao || !id_usuario) {
            throw new Error("Erro: nome, descrição ou id_usuario inválidos :/");
        }

        const r = await db.query(
            "INSERT INTO playlist (nome, descricao, id_usuario) VALUES ($1, $2, $3) RETURNING *",
            [nome, descricao, id_usuario]
        );

        if (!r.rowCount) {
            throw new Error("Erro: Playlist não criada :/");
        }

        return res.status(201).json(r.rows[0]);

    } catch (error) {
        return res.status(400).json(error.message);
    }
});

// DELETE playlist
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;

        if (!id) {
            throw new Error("Erro: id inválido :/");
        }

        const r = await db.query(
            "DELETE FROM playlist WHERE id = $1 RETURNING *",
            [id]
        );

        if (!r.rowCount) {
            throw new Error("Erro: Playlist não encontrada :/");
        }

        return res.status(200).json(r.rows[0]);

    } catch (error) {
        return res.status(404).json(error.message);
    }
});

module.exports = router;