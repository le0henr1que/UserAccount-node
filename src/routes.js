const {Router} = require("express")
const UserController = require("./app/Controllers/UserController")




const routes = new Router();

routes.post("/store", UserController.store );
routes.get("/user", UserController.show );
routes.get("/teste", UserController.teste );


module.exports = routes