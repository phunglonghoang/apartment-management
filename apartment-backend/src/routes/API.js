import express from "express";

import apiRegisterController from "../controller/api/apiRegisterController"
import apiLoginController from "../controller/api/apiLoginController"
import usersController from"../controller/users/usersController"
const router = express.Router();

const initApiRoutes = (app) => {
   
    router.post("/register",apiRegisterController.handelRegister);
    router.post("/login",apiLoginController.handelLogin);
    router.get("/user/admin/read", usersController.readAdmin);

    router.get("/user/read", usersController.readFunc);
    router.put("/user/update", usersController.updateFunc);
    router.post("/user/admin/create",usersController.createFunc);
    router.delete("/user/delete", usersController.deleteFunc)
    return app.use("/api/v1",router);
}

export default initApiRoutes;