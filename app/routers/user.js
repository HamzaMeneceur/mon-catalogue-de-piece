import { Router } from 'express'
import userController from '../controllers/user.js'

const userRouter = Router()

userRouter.get("/all", userController.getAll)

export default userRouter;