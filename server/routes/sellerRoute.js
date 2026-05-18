import express from "express";
import {
  isSellerAuth,
  sellerLogin,
  SellerLogout,
} from "../controllers/sellerController.js";

const sellerRouter = express.Router();
sellerRouter.post("/login", sellerLogin);
sellerRouter.get("/is-auth", isSellerAuth);
sellerRouter.get("/logout", SellerLogout);
export default sellerRouter;
