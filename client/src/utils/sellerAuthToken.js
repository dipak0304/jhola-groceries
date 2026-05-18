const TOKEN_KEY = "jhola_seller_token";

export const getSellerAuthToken = () => localStorage.getItem(TOKEN_KEY);

export const setSellerAuthToken = (token) => {
  if (token) localStorage.setItem(TOKEN_KEY, token);
};

export const clearSellerAuthToken = () => localStorage.removeItem(TOKEN_KEY);
