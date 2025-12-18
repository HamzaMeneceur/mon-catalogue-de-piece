import { Router } from 'express'

import userRouter from './routers/user.js';
import medalRouter from './routers/medal.js';
import pieceRouter from './routers/piece.js';

const router = Router();

router.use('/v1/user', userRouter);
router.use('/v1/medal', medalRouter);
router.use('/v1/piece', pieceRouter);

export default router
