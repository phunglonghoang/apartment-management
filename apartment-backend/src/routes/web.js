import express from "express";
import { handleHelloWorld } from "../controller/home/homeController";
import { handelUserPage, handleCreateUser, } from "../controller/users/userController";

const router = express.Router();

const initWebRoutes = (app) => {
    router.get("/", handleHelloWorld);
    router.get("/users/user-list",handelUserPage );
    
    router.post("/users/create-user",handleCreateUser);  
    return app.use("/",router);
}

export default initWebRoutes;