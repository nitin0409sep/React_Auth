import { Router } from "express"
import { getPublicPostsController } from "../controllers/public/public.controller";
import { getUserPostsController, addUserPostsController, editUserPostsController, deleteUserPostsController } from "../controllers/user/post.controller";
import { roleBasedAuthMiddleware } from "../middlewares/auth.middleware";

const route = Router();

// Get User Posts
route.get('/post', roleBasedAuthMiddleware('User'), getUserPostsController);

// Add User Posts
route.post('/post', roleBasedAuthMiddleware('User'), addUserPostsController);

// Edit User Posts
route.put('/post/:post_id', roleBasedAuthMiddleware('User'), editUserPostsController);

// Delete User Post
route.delete('/post/:post_id', roleBasedAuthMiddleware('User'), deleteUserPostsController);

export { route as PostRoute }