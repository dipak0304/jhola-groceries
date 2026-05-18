import jwt from "jsonwebtoken";
import { getSellerTokenFromRequest } from "../utils/getSellerTokenFromRequest.js";

const authSeller = async (req, res, next) => {
  const sellerToken = getSellerTokenFromRequest(req);

  if (!sellerToken) {
    return res.status(403).json({ success: false, message: "Not Authorized" });
  }

  try {
    const tokenDecode = jwt.verify(sellerToken, process.env.JWT_SECRET);

    if (tokenDecode.email === process.env.SELLER_EMAIL) {
      return next();
    }

    return res
      .status(403)
      .json({ success: false, message: "Not Authorized" });
  } catch (error) {
    return res.status(403).json({ success: false, message: "Not Authorized" });
  }
};

export default authSeller;
