import { Request, Response } from "express";

import todoModel from "../models/todo.model";

import { ApiSuccessResponse } from "../responses/successResponse";
import { ApiErrorResponse } from "../responses/errorResponse";

// Create Todo
export const createTodo = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { todoName } = req.body;

    if (!todoName) {
      res.status(400).json({
        success: false,
        message: "Need todoName in Body",
      } as ApiErrorResponse);

      return;
    }

    const todoId = "todo_" + Date.now();

    const newTodo = await todoModel.create({
      todoId,
      todoName,
    });

    res.status(201).json({
      success: true,
      message: "Todo is created",
      data: newTodo,
    } as ApiSuccessResponse<typeof newTodo>);
  } catch (error) {
    console.log("Create Todo Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    } as ApiErrorResponse);
  }
};

// Get One Todo
export const getOneTodos = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { id } = req.params;

    const todo = await todoModel.findOne({
      todoId: id,
    });

    if (!todo) {
      res.status(404).json({
        success: false,
        message: "Todo not found",
      } as ApiErrorResponse);

      return;
    }
    res.status(200).json({
      success: true,
      message: "Data fetched successfully",
      data: todo,
    } as ApiSuccessResponse<typeof todo>);
  } catch (error) {
    console.log("Get One Todo Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    } as ApiErrorResponse);
  }
};

// Get All Todos
export const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const getAllTodo = await todoModel.find();

    res.status(200).json({
      success: true,
      message: "Fetch all successfully",
      data: getAllTodo,
    } as ApiSuccessResponse<typeof getAllTodo>);
  } catch (error) {
    console.log("Get Todos Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    } as ApiErrorResponse);
  }
};

// Update Todo
export const updateTodo = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { todoId, todoName } = req.body;

    if (!todoId) {
      res.status(400).json({
        success: false,
        message: "Need todoId in Body",
      } as ApiErrorResponse);

      return;
    }

    if (!todoName) {
      res.status(400).json({
        success: false,
        message: "Need todoName in Body",
      } as ApiErrorResponse);

      return;
    }

    const updatedTodo = await todoModel.findOneAndUpdate(
      { todoId },
      {
        todoName,
      },
      {
        new: true,
      },
    );

    if (!updatedTodo) {
      res.status(404).json({
        success: false,
        message: "Todo not found",
      } as ApiErrorResponse);

      return;
    }

    res.status(200).json({
      success: true,
      message: "Todo updated successfully",
      data: updatedTodo,
    } as ApiSuccessResponse<typeof updatedTodo>);
  } catch (error) {
    console.log("Update Todo Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    } as ApiErrorResponse);
  }
};

// Delete Todo
export const deleteTodo = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { todoId } = req.body;

    if (!todoId) {
      res.status(400).json({
        success: false,
        message: "Need todoId in Body",
      } as ApiErrorResponse);

      return;
    }

    const deletedTodo = await todoModel.findOneAndDelete({
      todoId,
    });

    if (!deletedTodo) {
      res.status(404).json({
        success: false,
        message: "Todo not found",
      } as ApiErrorResponse);

      return;
    }

    res.status(200).json({
      success: true,
      message: "Deleted Successfully",
      data: deletedTodo,
    } as ApiSuccessResponse<typeof deletedTodo>);
  } catch (error) {
    console.log("Delete Todo Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    } as ApiErrorResponse);
  }
};
