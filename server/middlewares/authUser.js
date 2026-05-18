import jwt from "jsonwebtoken";
import { getTokenFromRequest } from "../utils/getTokenFromRequest.js";

const authUser = async (req, res, next) => {
  try {
    const token = getTokenFromRequest(req);

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized, no token provided",
      });
    }

    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    if (!tokenDecode?.id) {
      return res.status(401).json({
        success: false,
        message: "Not authorized, invalid token",
      });
    }

    req.userId = tokenDecode.id;
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(401).json({
      success: false,
      message: "Not authorized, token failed",
    });
  }
};

export default authUser;
