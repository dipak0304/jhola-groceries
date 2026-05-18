/** Cookie options for auth tokens (user + seller). */
export const getAuthCookieOptions = () => {
  const isProd =
    process.env.NODE_ENV === "production" || process.env.VERCEL === "1";

  // Only needed when the browser talks directly to the API host (not via /api proxy).
  const crossSite = process.env.USE_CROSS_ORIGIN_COOKIES === "true";

  return {
    httpOnly: true,
    secure: isProd,
    sameSite: crossSite ? "none" : isProd ? "lax" : "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  };
};
