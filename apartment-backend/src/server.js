import express from "express";
import configViewEngine from "./config/viewengine";

import initWebRoutes from "./routes/API";

const app = express();
const PORT= process.env.PORT || 3001;
configViewEngine(app);

initWebRoutes(app);

app.listen(PORT, ()=>{
    console.log(">>apartment-backend in running is localhost:"+PORT);
})
