import { Router } from "express";
import { getUsersController } from "../controllers/user/users.controller";
import { roleBasedAuthMiddleware } from "../middlewares/auth.middleware";

// Router
const route = Router();

route.get('/getUsers', roleBasedAuthMiddleware('Admin'), getUsersController);

export const userRoute = route;
