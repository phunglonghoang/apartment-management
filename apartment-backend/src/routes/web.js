import express from "express";
import { handleHelloWorld } from "../controller/home/homeController";
import userController from "../controller/users/userController";
import apiController from "../controller/api/apiRegisterController"

const router = express.Router();

const initWebRoutes = (app) => {
    router.get("/", handleHelloWorld);
    router.get("/users/user-list",userController.handelUserPage );
    router.post("/users/create-user",userController.handleCreateUser);  
    router.post("/delete-user/:id", userController.handelDeleteUser)
    router.get("/edit-user/:id",userController.getEditUserPage)
    router.post("/users/edit-user", userController.handelUpdateUser);



    return app.use("/",router);
}

export default initWebRoutes;