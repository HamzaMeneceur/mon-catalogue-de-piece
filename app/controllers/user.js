import userDatamapper from "../dataMappers/user.js";
import hashService from "../services/bcrypt.js";

const userController = {
    async hashUser(req,res,next) {
        let userInfo;
            try {
                const { pseudo, email, password } = req.body
                const passHash = await hashService.hashPass(password)
                userInfo = [pseudo,email,passHash]
                await userDatamapper.newUser(userInfo)
                res.status(201).json("done")
            }
            catch {
                console.log(userInfo,req.body)
                
                res.status(500).json('nothing', req.params)
                console.log('Une erreur est survenu')
            }
        }
}
export default userController;