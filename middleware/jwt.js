const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  // Extract token from 'Authorization' header
  const authHeader = req.header("Authorization");
  
  // Check if the header exists and follows the "Bearer <token>" format
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  // Extract the token after "Bearer "
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.userId; // Assuming the token payload contains a 'userId'
    next(); // Proceed to the next middleware
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;
