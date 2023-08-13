import express, { Application } from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.get("/", UserController.getUsersController);
router.get("/:id", UserController.getSingleUsersController);
router.post("/", UserController.addUserController);
router.post("/profile", UserController.createOrUpdateProfileController);

export const UserRoutes = router;
