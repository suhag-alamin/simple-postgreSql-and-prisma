import express from "express";
import { PostController } from "./post.controller";

const router = express.Router();

router.post("/", PostController.createPostController);
router.get("/", PostController.getPostController);
router.get("/:id", PostController.getSinglePostController);
router.patch("/:id", PostController.updatePostController);
router.delete("/:id", PostController.deletePostPostController);

export const PostRoutes = router;
