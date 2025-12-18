import client from "../services/pg.js";

const medalDatamapper = {
    async findAll() {
        const sqlQuery = `select * from medal`
        let result;
        try {

            result = await client.query(sqlQuery)
        }
        catch {
            console.log('Une erreur dans le dataMapper');
        }
        return result.rows
    }
};

export default medalDatamapper