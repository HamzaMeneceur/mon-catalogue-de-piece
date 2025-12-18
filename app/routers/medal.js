import { Router } from 'express';

import medalController from '../controllers/medal.js';

const medalRouter = Router();

medalRouter.get('/all', medalController.getAllMedal);

export default medalRouter