import ratelimit from "../config/uptash.js";

const ratelimiter = async (req, res, next) => {
  try {
    // TODO
    const result = await ratelimit.limit("my-rate-limit");

    // check if request exceeds limit
    if (!result.success) {
      return res.status(429).json({
        message: "Too many requests, please try again later.",
      });
    }

    // Allowed → continue
    next();
  } catch (error) {
    console.error("Rate limiter error:", error.message);

    // Send generic 500 response instead of crashing
    res.status(500).json({ message: "Internal server error" });
  }
};

export default ratelimiter;
