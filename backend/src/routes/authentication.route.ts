import { Router } from "express";
import { RegisterController, LoginController } from "../controllers/auth/auth.contoller";

// Router
export const authenticationRoute = Router();

// Login
authenticationRoute.post('/login', LoginController);

// Register
authenticationRoute.post('/register', RegisterController);


