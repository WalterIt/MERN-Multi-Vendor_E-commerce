import express from "express";
import dotenv from "dotenv";
import ErrorHandler from "./utils/ErrorHandler.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use("/backend", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true }));

// CONFIG
if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config({
    path: "./config/.env",
  });
}

// IMPORT
import user from "./controller/user.js";
app.use("/user", user);

// FOR ERRORHANDLING
app.use(ErrorHandler);

export default app;
