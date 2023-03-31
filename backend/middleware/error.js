import ErrorHandler from "../utils/ErrorHandler.js";

export const error = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server Error!";

  // WRONG MONGODB ID ERROR
  if (err.name === "CastError") {
    const message = `Ressources not found with this id.. Invalid ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // DUPLICATE KEY error
  if (err.code === 11000) {
    const message = `Duplicate Key ${Object.keys(err.keyValue)} Entered!`;
    err = new ErrorHandler(message, 400);
  }

  // WRONG JWT ERROR
  if (err.name === "jsonWebTokenError") {
    const message = `Your Url is invalid. Please, try again later!`;
    err = new ErrorHandler(message, 400);
  }

  // JWT EXPIRED
  if (err.name === "TokenExpiredError") {
    const message = `Your Token is expired. Please, sign in again!`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
