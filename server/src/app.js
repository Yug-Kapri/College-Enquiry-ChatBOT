import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import helmet from "helmet";

import { errorMiddleware } from "./middlewares/error-middleware.js";
import { notFoundMiddleware } from "./middlewares/not-found-middleware.js";

import apiRouter from "./api/index.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(helmet());

// CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

// Routes
app.get("/", (req, res) => {
  res.send("Hello world!");
});
app.use("/api", apiRouter);

// Error middleware
app.use(errorMiddleware);

// Not found middleware
app.use(notFoundMiddleware);

export default app;
