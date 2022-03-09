const app = require('../../app');
const User = require('../Controllers/Models/User')
const cors = require('cors')

app.use((re, res, next) =>{
     
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "Get, POST, PUT, DELETE")
    res.header("Access-Control-Allow-Headers", "Access, Content-type, Authorization, Acept, Origin, X-Requested-width")
    app.use(cors())
    next();
})


class UserController {
  
    show(req, res){
        try{
            User.find({}).then((user) => {
                 return res.json(user);
             })
        }catch{
            return res.status(400).send({error: 'Error Load Project'});
    
        }
    }

    async store(req, res){

        const { name } = req.body

        const data = { name }

        await User.create(data, (err) =>{
            if(err){
                return res.status(400).json({
                    error: true,
                    message: "Erro ao tentar inserir o nome",
                    code: err
                })
            }else{
                return res.status(200).json({
                    error: false,
                    message: "Nome cadastrado com sucesso"
                })
            }
        })
    }
}

module.exports = new UserController();