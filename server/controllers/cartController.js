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
    const { userId, cartItems } = req.body;

    // Validate input
    if (!userId || !cartItems || typeof cartItems !== "object") {
      return res.status(400).json({
        success: false,
        message: "Invalid request. userId and cartItems are required.",
      });
    }

    // Find user and update cart
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


