import jwt from "jsonwebtoken";
import { getAuthCookieOptions } from "../utils/authCookie.js";
//Login Seller :/api/seller/login

export const sellerLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      password === process.env.SELLER_PASSWORD &&
      email === process.env.SELLER_EMAIL
    ) {
      const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      res.cookie("sellerToken", token, getAuthCookieOptions());
      return res.json({ success: true, message: "Logged In" });
    } else {
      return res.json({ success: false, message: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

//Seller isAuth :/api/seller/is-auth (always 200 — not logged in is not an error)
export const isSellerAuth = async (req, res) => {
  try {
    const { sellerToken } = req.cookies;
    if (!sellerToken) {
      return res.json({ success: false });
    }

    const tokenDecode = jwt.verify(sellerToken, process.env.JWT_SECRET);
    if (tokenDecode.email === process.env.SELLER_EMAIL) {
      return res.json({ success: true });
    }

    return res.json({ success: false });
  } catch (error) {
    return res.json({ success: false });
  }
};

//Logout Seller:/api/seller/logout
export const SellerLogout = async (req, res) => {
  try {
    res.clearCookie("sellerToken", getAuthCookieOptions());
    return res.json({ success: true, message: "Logged Out" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
