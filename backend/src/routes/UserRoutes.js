import express from "express";
import { registerUser, loginUser } from "../controller/UserController.js";

const router = express();

/* GET users listing. */
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
