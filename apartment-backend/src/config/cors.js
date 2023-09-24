require ("dotenv").config();

const configCors = (app) => {
    app.use(function (req, res, next ){
        res.setHeader ('Access-Control-Allow-Origin', process.env.REACT_URL);
        res.setHeader ('Access-Control-Allow-Methods','OPTIONS, DELETE, POST, GET, PATCH, PUT');
        res.setHeader ('Access-Control-Allow-Headers', 'X-Requested-With, content-Type  ');
        res.setHeader ('Access-Control-Allow-Credentials', true);
           
        next();
    })
}
export default configCors