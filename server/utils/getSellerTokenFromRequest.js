export const getSellerTokenFromRequest = (req) => {
  const headerToken = req.headers["x-seller-token"];
  if (headerToken) return headerToken;
  return req.cookies?.sellerToken;
};
