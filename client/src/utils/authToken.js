const TOKEN_KEY = "jhola_user_token";

export const getAuthToken = () => localStorage.getItem(TOKEN_KEY);

export const setAuthToken = (token) => {
  if (token) localStorage.setItem(TOKEN_KEY, token);
};

export const clearAuthToken = () => localStorage.removeItem(TOKEN_KEY);
