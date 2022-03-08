const User = require('../Controllers/Models/User')

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