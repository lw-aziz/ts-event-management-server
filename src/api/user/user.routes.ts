import { Router, Request, Response, NextFunction } from 'express'
import UserController from './user.controller'
import { CreateUserDTO, LoginUserDTO } from '../../schema/dto/user.dto'
import { isAuthenticated } from '../middleware/authenticate'
const userRouter = Router()

userRouter.post('/signup', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload: CreateUserDTO = req.body;
        const result = await UserController.signup(payload);
        return res.status(201).send(result)
    } catch (error) {
        next(error);
    }
})

userRouter.post('/login', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload: LoginUserDTO = req.body;
        const result = await UserController.authenticate(payload);
        return res.status(200).send(result)
    } catch (error) {
        next(error);
    }
});

userRouter.get('/get-profile', isAuthenticated, UserController.getProfile);

export default userRouter;