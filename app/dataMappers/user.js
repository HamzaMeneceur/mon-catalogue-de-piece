import client from '../services/pg.js';

const userDatamapper = {
    async findAll() {
            const sqlQuery = `select * from medal`
            let result;
            console.log('here')
            try {
                const response = await client.query(sqlQuery);
                result = response.rows
            }
            catch {
                console.log('Une erreur est survenu dans le datamapper')
                result = await client.query(sqlQuery)
            }
            return result
        }
}
export default userDatamapper