import { Router } from "express";
import { getUsersController } from "../controllers/user/users.controller";

// Router
const route = Router();

route.get('/getUsers', getUsersController);


export const userRoute = route;
