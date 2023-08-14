import express from "express";
import { CategoryController } from "./categroy.controller";

const router = express.Router();

router.post("/", CategoryController.createCategoryController);

export const CategoryRoutes = router;
