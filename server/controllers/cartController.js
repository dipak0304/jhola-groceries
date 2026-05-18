import User from "../models/User.js";

/**
 * Update the user's cart in the database.
 * Expects:
 *   req.body = {
 *     userId: string,
 *     cartItems: { [productId]: quantity }
 *   }
 */
export const updateCart = async (req, res) => {
  try {
    const { cartItems } = req.body;
    const userId = req.userId;

    if (!cartItems || typeof cartItems !== "object") {
      return res.status(400).json({
        success: false,
        message: "Invalid request. cartItems is required.",
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: { cartItems } }, // safely update only cartItems
      { new: true } // return the updated document
    );

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    return res.json({
      success: true,
      message: "Cart updated successfully",
      cartItems: updatedUser.cartItems,
    });
  } catch (error) {
    console.error("Error updating cart:", error);
    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};


