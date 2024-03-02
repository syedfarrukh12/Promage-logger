// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import loggerRouter from './routes/logger'
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Logger service for proMage");
});

app.use(loggerRouter)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});