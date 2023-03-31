import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/Database.js";
dotenv.config();

// HANDLING UNCAUGHT EXCEPTION
process.on("uncaughtException", (error) => {
  console.log(`Error: ${error.message}`);
  console.log("Shutting down the server for handling uncaught exception!");
});

// CONFIG
if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config({
    path: "./config/.env",
  });
}

// CONNECT DB
connectDB();

// CREATE SERVER
const server = app.listen(process.env.PORT, () =>
  console.log(`Server listening on http://localhost:${process.env.PORT}!`)
);

//UNHANDLED PROMISE REJECTION
process.on("unhandledRejection", (error) => {
  console.log(`Shutting down the server for ${error.message}`);
  console.log(`Shutting down the server for unhandle promise rejection!`);

  server.close(() => {
    process.exit(1);
  });
});
