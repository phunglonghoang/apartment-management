import express from "express";
import { handleHelloWorld } from "../controller/home/homeController";
import userController from "../controller/users/userController";
import apiController from "../controller/api/apiController"

const router = express.Router();

const initApiRoutes = (app) => {
    router.get("/", handleHelloWorld);
    router.get("/users/user-list",userController.handelUserPage );
    router.post("/users/create-user",userController.handleCreateUser);  
    router.post("/delete-user/:id", userController.handelDeleteUser)
    router.get("/edit-user/:id",userController.getEditUserPage)
    router.post("/users/edit-user", userController.handelUpdateUser);



 
    router.post("/register",apiController.handelRegister)
    return app.use("/api/v1",router);
}

export default initApiRoutes;