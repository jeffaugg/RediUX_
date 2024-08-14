import { Router } from "express";
import { CreateUserAdminController } from "../../../../../modules/users/useCase/signUpUserAdmin/CreateUserAdminController";
import { AuthUserAdminController } from "../../../../../modules/users/useCase/signInUserAdmin/AuthUserAdminController";

const userRouter = Router();

const createUserAdminController = new CreateUserAdminController();
const authUserAdminController = new AuthUserAdminController();
userRouter.post("/signUp", createUserAdminController.handle);
userRouter.post("/signIn", authUserAdminController.handle);

export { userRouter };
