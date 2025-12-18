import { Router } from 'express';
import pieceController from '../controllers/piece.js';

const pieceRouter = Router()

pieceRouter.get('/all', pieceController.getAllPiece)

export default pieceRouter