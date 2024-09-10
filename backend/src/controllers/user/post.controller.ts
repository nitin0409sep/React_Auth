import { Response } from "express";
import { ExtendedRequest } from "../../utils/user.interface";
import { addUserPost, deleteUserPost, editUserPost, getUserPost } from "../../database/db-helper/user/user-post.db.helper";

// Get User Posts Controller
export const getUserPostsController = async (req: ExtendedRequest, res: Response) => {
    const user_id: string | null = req.user?.user_id ?? null;

    if (!user_id)
        return res.status(401).json({ posts: [], status: 401, errors: "User not found" });

    try {
        const posts = await getUserPost(user_id);

        if (!posts?.length) {
            return res.status(500).json({ error: "Posts couldn't be founded, please try again", status: 500 });
        }

        return res.status(200).json({ posts: posts, status: 200, error: null });
    } catch (error) {
        console.error('Error Adding Post:', error);
        return res.status(500).json({ error: "An unexpected error occurred", status: 500 });
    }
}

// Add User Posts Controller
export const addUserPostsController = async (req: ExtendedRequest, res: Response) => {
    const user_id: string | null = req.user?.user_id ?? null;

    if (!user_id) {
        return res.status(401).json({ posts: [], status: 401, errors: "User not found" });
    }

    const { post_name, post_desc, post_article, post_public = false, img_url } = req.body;

    const errors: string[] = [];

    if (!post_name || !post_article || !post_desc || !img_url) {
        if (!post_name) errors.push("Post Name");
        if (!post_article) errors.push("Post Article");
        if (!post_desc) errors.push("Post Desc");
        if (!img_url) errors.push("Image");

        return res.status(400).json({ errors: `${errors.join(', ')} not found` });
    }

    try {
        const post = await addUserPost(user_id, post_name, post_desc, post_article, post_public, img_url);

        if (!post) {
            return res.status(500).json({ error: "Post couldn't be added, please try again", status: 500 });
        }

        return res.status(200).json({ message: "Post added successfully", status: 200, error: null });
    } catch (error) {
        console.error('Error Adding Post:', error);
        return res.status(500).json({ error: "An unexpected error occurred", status: 500 });
    }
};

export const editUserPostsController = async (req: ExtendedRequest, res: Response) => {
    const user_id: string | null = req.user?.user_id ?? null;
    const { post_id } = req.params as { post_id: string | null };

    if (!user_id) {
        return res.status(401).json({ posts: [], status: 401, errors: "User not found" });
    }

    if (!post_id) {
        return res.status(401).json({ posts: [], status: 401, errors: "Post id not found" });
    }

    const { post_name, post_desc, post_article = "", post_public = false, img_url } = req.body;

    const errors: string[] = [];

    if (!post_name || !post_desc || !img_url) {
        if (!post_name) errors.push("Post Name");
        if (!post_desc) errors.push("Post Desc");
        if (!img_url) errors.push("Image");

        return res.status(400).json({ errors: `${errors.join(', ')} not found` });
    }

    try {
        const post = await editUserPost(user_id, post_name, post_desc, post_article, post_public, img_url, post_id);

        if (!post) {
            return res.status(500).json({ error: "Post couldn't be edited, please try again", status: 500 });
        }

        return res.status(200).json({ message: "Post edited successfully", status: 200, error: null });
    } catch (error) {
        console.error('Error Editing Post:', error);
        return res.status(500).json({ error: "An unexpected error occurred", status: 500 });
    }
}

export const deleteUserPostsController = async (req: ExtendedRequest, res: Response) => {
    const user_id: string | null = req.user?.user_id ?? null;
    // const { post_id } = req.query; // Accessing post_id from query params
    const { post_id } = req.params; // URL Param

    if (!user_id) {
        return res.status(401).json({ posts: [], status: 401, errors: "User not found" });
    }

    try {
        const post = await deleteUserPost(user_id, post_id);

        if (!post) {
            return res.status(500).json({ error: "Post couldn't be deleted, please try again", status: 500 });
        }

        return res.status(200).json({ message: "Post Deleted Successfully", status: 200, error: null });
    } catch (error) {
        console.error('Error Deleting Post:', error);
        return res.status(500).json({ error: "An unexpected error occurred", status: 500 });
    }
};
