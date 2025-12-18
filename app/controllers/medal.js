import medalDatamapper from "../dataMappers/medal.js";

const medalController = {
    async getAllMedal(req,res,next){
        let result;
        try {
            result = await medalDatamapper.findAll()
            res.status(200).json(result)
        }
        catch {
            res.status(500).json("Une erreur c'est produit - Controller medal")
        }
    }
}

export default medalController