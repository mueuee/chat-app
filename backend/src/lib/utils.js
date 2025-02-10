import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  // Ensure JWT_SECRET is defined
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in .env file");
  }

  const token = jwt.sign({ _id: userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  // Set the token as an HTTP-only cookie
  res.cookie("token", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    httpOnly: true, // Prevents XSS attacks
    sameSite: "strict", // Protects against CSRF attacks
    secure: process.env.NODE_ENV === "production", // Secure in production
  });

  return token;
};
