import cors from "cors";
import express, { Application } from "express";
import { UserRoutes } from "./app/modules/user/user.route";
import { CategoryRoutes } from "./app/modules/category/category.route";
import { PostRoutes } from "./app/modules/post/post.route";

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/api/v1/user", UserRoutes);
app.use("/api/v1/category", CategoryRoutes);
app.use("/api/v1/post", PostRoutes);

export default app;
