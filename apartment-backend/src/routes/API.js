import express from "express";

import apiRegisterController from "../controller/api/apiRegisterController"
import apiLoginController from "../controller/api/apiLoginController"

const router = express.Router();

const initApiRoutes = (app) => {
   
    router.post("/register",apiRegisterController.handelRegister)
    router.post("/login",apiLoginController.handelLogin)
    return app.use("/api/v1",router);
}

export default initApiRoutes;