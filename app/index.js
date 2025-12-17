import { Router } from 'express'

import userRouter from './routers/user.js';

const router = Router();
router.use('/v1', userRouter);

export default router
