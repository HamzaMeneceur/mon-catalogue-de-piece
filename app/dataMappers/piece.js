import client from "../services/pg.js";

const pieceDatamapper = {

    async findall(){
        let result;
        const sqlQuery = 'select * from piece';
        try {
            result = await client.query(sqlQuery);
        }
        catch {
            console.log("Une errreur c'est produit - pieceDatamapper");
        }
        return result.rows
    } 
};

export default pieceDatamapper;