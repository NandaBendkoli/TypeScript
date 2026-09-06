import mongoose, { Document } from "mongoose";

interface TodoSchemaI extends Document {
  todoId: string;
  todoName: string;
}

const todoSchema = new mongoose.Schema<TodoSchemaI>(
  {
    todoId: {
      type: String,
      required: true,
      unique: true,
    },
    todoName: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const TodoModel = mongoose.model<TodoSchemaI>("Todo", todoSchema);

export default TodoModel;
