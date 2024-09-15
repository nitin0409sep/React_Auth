import { Response } from "express";
import { ExtendedRequest } from "../../utils/user.interface";
import { getPublicPost } from "../../database/db-helper/public/public-posts.helper.db";

export const getPublicPosts = async (req: ExtendedRequest, res: Response) => {
    try {
        const posts = await getPublicPost();

        res.status(200).json({ posts: posts, status: 200, errors: null });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ posts: [], error: error.message, status: 500 });
        } else {
            res.status(500).json({ error: 'An unexpected error occurred' });
        }
    }
}