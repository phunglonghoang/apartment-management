import express from "express";
import configViewEngine from "./config/viewEngine";
import bodyParser from "body-parser";
import initWebRoutes from "./routes/web";

const app = express();
const PORT= process.env.PORT || 3001;
configViewEngine(app);

//config body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

initWebRoutes(app);

app.listen(PORT, ()=>{
    console.log(">>apartment-backend in running is localhost:"+PORT);
})
