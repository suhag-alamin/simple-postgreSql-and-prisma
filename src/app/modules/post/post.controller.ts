import { Request, Response } from "express";
import { PostService } from "./post.service";

const createPostController = async (req: Request, res: Response) => {
  try {
    const result = await PostService.createPost(req.body);
    res.status(200).json({
      success: true,
      message: "Post created successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const getPostController = async (req: Request, res: Response) => {
  const options = req.query;
  try {
    const result = await PostService.getPost(options);
    res.status(200).json({
      success: true,
      message: "Post retrieved successfully",
      total: result.total,
      data: result.data,
    });
  } catch (error) {
    res.send(error);
  }
};
const getSinglePostController = async (req: Request, res: Response) => {
  try {
    const result = await PostService.getSinglePost(Number(req.params.id));
    res.status(200).json({
      success: true,
      message: "Post retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const updatePostController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const data = req.body;
  try {
    const result = await PostService.updatePost(id, data);
    res.status(200).json({
      success: true,
      message: "Post updated successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const deletePostPostController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const result = await PostService.deletePost(id);
    res.status(200).json({
      success: true,
      message: "Post deleted successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const PostController = {
  createPostController,
  getPostController,
  getSinglePostController,
  updatePostController,
  deletePostPostController,
};
