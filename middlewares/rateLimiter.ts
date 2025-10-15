import rateLimit from "express-rate-limit";

// Basic limiter (100 requests per 15 mins per IP)
export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: {
    status: "error",
    message: "Too many requests, please try again later.",
  },
});
