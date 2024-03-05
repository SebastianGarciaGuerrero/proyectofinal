import { pool } from "../db.js";

export const getAllTasks = async (req, res, next) => {
  console.log(req.userId);
  const result = await pool.query("SELECT * FROM task WHERE user_id = $1", [
    req.userId,
  ]);
  return res.json(result.rows);
};

export const getTask = async (req, res) => {
  const result = await pool.query("SELECT * FROM task WHERE id = $1", [
    req.params.id,
  ]);
  if (result.rowCount === 0) {
    return res.status(404).json({
      message: "No existe una tarea con ese id",
    });
  }
  return res.json(result.rows[0]);
};

export const createTask = async (req, res, next) => {
  const { title, description, image_url, price } = req.body;
  const result = await pool.query(
    "INSERT INTO task (title, description, image_url, price, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [title, description, image_url, price, req.userId]
  );
  res.json(result.rows[0]);
};

export const updateTask = async (req, res) => {
  const id = req.params.id;
  const { title, description, image_url, price } = req.body;
  const result = await pool.query(
    "UPDATE task SET title = $1, description = $2, image_url = $3, price = $4 WHERE id = $5 RETURNING *",
    [title, description, image_url, price, id]
  );

  if (result.rowCount === 0) {
    return res.status(404).json({
      message: "No existe una tarea con ese id",
    });
  }

  return res.json(result.rows[0]);
};

export const deleteTask = async (req, res) => {
  const result = await pool.query("DELETE FROM task WHERE id = $1", [
    req.params.id,
  ]);

  if (result.rowCount === 0) {
    return res.status(404).json({
      message: "No existe una tarea con ese id",
    });
  }

  return res.sendStatus(204);
};
