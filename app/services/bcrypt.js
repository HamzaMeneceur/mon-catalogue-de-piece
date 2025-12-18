import bcrypt from 'bcrypt';

const saltRounds = 10;

const hashService = {
    async matchPass(a,b) {
        await bcrypt.compare(a,b);
    },
    async hashPass(a) {
        return bcrypt.hash(a, saltRounds);
    }
};

export default hashService;

