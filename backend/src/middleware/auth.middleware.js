import JWT from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies["token"];
    if (!token)
      return res
        .status(400)
        .json({ message: "unauthorized- no token provided" });

    const decoded = JWT.verify(token, process.env.JWT_SECRET);
    if (!decoded)
      return res.status(400).json({ message: "unauthorized  - invaled token" });

    const user = await User.findById(decoded._id);
    req.user = user;

    next();
  } catch (error) {
    console.log("error in protectRoute middleware", error);
  }
};

export default protectRoute;
