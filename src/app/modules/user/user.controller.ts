import { Request, Response } from "express";
import { UserService } from "./user.service";

const addUserController = async (req: Request, res: Response) => {
  try {
    const result = await UserService.addUser(req.body);
    res.status(200).json({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const createOrUpdateProfileController = async (req: Request, res: Response) => {
  try {
    const result = await UserService.createOrUpdateProfile(req.body);
    res.status(200).json({
      success: true,
      message: "User profile created successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const getUsersController = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getUsers();
    res.status(200).json({
      success: true,
      message: "User retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const getSingleUsersController = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getSingleUsers(Number(req.params.id));
    res.status(200).json({
      success: true,
      message: "User retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const UserController = {
  addUserController,
  createOrUpdateProfileController,
  getUsersController,
  getSingleUsersController,
};
