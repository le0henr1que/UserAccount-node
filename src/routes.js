const {Router} = require("express")
const UserController = require("./app/Controllers/UserController")
const cors = require('cors')

const routes = new Router();

app.use((req, res, next) => {
            
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "Get, POST, PUT, DELETE")
    res.header("Access-Control-Allow-Headers", "Access, Content-type, Authorization, Acept, Origin, X-Requested-width")
    app.use(cors())
    next();
})

routes.post("/store", UserController.store );
routes.get("/user", UserController.show );


module.exports = routes