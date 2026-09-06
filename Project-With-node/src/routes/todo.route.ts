import express from "express";
import {
  createTodo,
  deleteTodo,
  getOneTodos,
  getTodos,
  updateTodo,
} from "../controller/todo.controller";

const routes = express.Router();

routes.post("/createTodo", createTodo);
routes.get("/getOne/:id", getOneTodos);
routes.get("/getAllTodo", getTodos);
routes.post("/updateTodo", updateTodo);
routes.post("/deleteTodo", deleteTodo);

export default routes;
