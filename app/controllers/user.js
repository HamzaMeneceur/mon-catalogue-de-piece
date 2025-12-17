import userDatamapper from "../dataMappers/user.js"

const userController = {
    async getAll(req,res,next) {
        let result
            try {
                result = await userDatamapper.findAll();
                res.status(200).json(result)
            }
            catch {
                res.status(500).json(result)
                console.log('Une erreur est survenu')
            }
        }
}
export default userController;