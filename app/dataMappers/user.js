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
        },
        async newUser(data) {
            let result
            try {
                const sqlQuery = 'INSERT INTO "user"(pseudo,email, password) VALUES ($1,$2,$3);';
                result = await client.query(sqlQuery, data);
            }
            catch(err) {
                console.log(err)
            }
            return result
        }
}
export default userDatamapper