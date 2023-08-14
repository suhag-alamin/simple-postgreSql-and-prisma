import { Request, Response } from "express";
import { CategoryService } from "./category.service";

const createCategoryController = async (req: Request, res: Response) => {
  try {
    const result = await CategoryService.createCategory(req.body);
    res.status(200).json({
      success: true,
      message: "Category created successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const CategoryController = {
  createCategoryController,
};
