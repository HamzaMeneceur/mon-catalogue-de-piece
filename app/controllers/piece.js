import pieceDatamapper from "../dataMappers/piece.js";

const pieceController = {

    async getAllPiece(req,res,next) {
        try {
            res.status(200).json(pieceDatamapper.findall())
        }
        catch {
            res.status(500).json("Une errreur c'est produit - pieceController")
        }
    }
}

export default pieceController