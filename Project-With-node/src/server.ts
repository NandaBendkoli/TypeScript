import express, { Express } from "express";
import env from "dotenv";
import connection from "./config/db";
import routes from "./routes/todo.route";
env.config();

const port = process.env.PORT || 8000;

const app: Express = express();
app.use(express.json());
connection();

// routes

app.use("/app/todo", routes);

app.listen(port, () => {
    console.log(`App is Running on http://localhost:${port}/`);
});
